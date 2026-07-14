import { type ElementType, forwardRef, type ComponentPropsWithoutRef, type JSX } from 'react';

type PolymorphicRef<C extends ElementType> = ComponentPropsWithoutRef<C>['ref'];

export interface TextProps<C extends ElementType = 'p'> {
  variant?: 'body' | 'caption' | 'lead';
  as?: C;
  className?: string;
  children?: React.ReactNode;
  ref?: PolymorphicRef<C>;
}

const variantStyles = {
  body: 'text-base text-vaporwave-black dark:text-vaporwave-white',
  caption: 'text-sm text-gray-500 dark:text-gray-400',
  lead: 'text-lg text-gray-600 dark:text-gray-300',
};

const TextComponent = forwardRef(
  <C extends ElementType = 'p'>(
    { variant = 'body', as, className = '', children, ...props }: TextProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as || 'p';
    return (
      <Component ref={ref} className={`${variantStyles[variant]} ${className}`} {...props}>
        {children}
      </Component>
    );
  }
);

TextComponent.displayName = 'Text';

export const Text = TextComponent as <C extends ElementType = 'p'>(
  props: TextProps<C> & { ref?: PolymorphicRef<C> }
) => JSX.Element;
