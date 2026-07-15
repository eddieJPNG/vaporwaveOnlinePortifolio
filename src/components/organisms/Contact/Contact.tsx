import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Input } from '../../atoms';
import { AnimatedSection } from '../../atoms/AnimatedSection';
import { contactFormSchema, type ContactFormData } from '../../../validations/contact';
import { SITE_CONFIG } from '../../../utils/constants';
import chatIcon from '../../../assets/icons-decorative/chat.png';
import heroStreet from '../../../assets/backgrounds/street.gif';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});

  const validateField = (name: keyof ContactFormData, value: string) => {
    const result = contactFormSchema.safeParse({ ...formData, [name]: value });
    if (result.success) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } else {
      const fieldError = result.error.issues.find((issue) => issue.path[0] === name);
      if (fieldError) {
        setErrors((prev) => ({ ...prev, [name]: fieldError.message }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof ContactFormData]) {
      validateField(name as keyof ContactFormData, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setTouched({
        nome: true,
        email: true,
        assunto: true,
        mensagem: true,
      });
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: result.data.nome,
          from_email: result.data.email,
          subject: result.data.assunto,
          message: result.data.mensagem,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ nome: '', email: '', assunto: '', mensagem: '', honeypot: '' });
      setTouched({});
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <img
        src={heroStreet}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <div className="max-w-xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-12">
            <h2 className="text-3xl font-bold text-vaporwave-black dark:text-vaporwave-white">
              Vamos trabalhar juntos?
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-12">
            <img src={chatIcon} alt="" aria-hidden="true" className="w-8 h-8" />
            <h2 className="text-3xl font-bold text-vaporwave-black dark:text-vaporwave-white">
              Contato
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg text-green-700 dark:text-green-300 text-center">
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 rounded-lg text-red-700 dark:text-red-300 text-center">
              Erro ao enviar mensagem. Tente novamente ou entre em contato por email.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <Input
              label="Nome"
              name="nome"
              type="text"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.nome ? errors.nome : undefined}
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email ? errors.email : undefined}
              required
            />
            <Input
              label="Assunto"
              name="assunto"
              type="text"
              placeholder="Assunto da mensagem"
              value={formData.assunto}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.assunto ? errors.assunto : undefined}
              required
            />
            <div className="w-full">
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-vaporwave-black dark:text-vaporwave-white mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Sua mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-vaporwave-white-dark dark:bg-vaporwave-black-light border rounded-lg focus:outline-none focus:border-vaporwave-purple resize-none text-vaporwave-black dark:text-vaporwave-white ${
                  touched.mensagem && errors.mensagem
                    ? 'border-red-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                required
              />
              {touched.mensagem && errors.mensagem && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.mensagem}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
            Mensagens enviadas para {SITE_CONFIG.email}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
