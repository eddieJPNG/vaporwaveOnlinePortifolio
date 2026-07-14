import { Suspense, type ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const DefaultFallback = () => (
  <div
    className="min-h-[200px] flex items-center justify-center"
    role="status"
    aria-label="Carregando"
  >
    <div className="w-8 h-8 border-2 border-vaporwave-purple border-t-transparent rounded-full animate-spin" />
  </div>
);

export const LazySection = ({ children, fallback = <DefaultFallback /> }: LazySectionProps) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
