import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  href?: string;
};

const styles: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-[#3d4fe6] border border-transparent',
  secondary:
    'bg-white text-bg hover:bg-white/90 border border-transparent',
  outline:
    'bg-transparent text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.04]',
  ghost: 'bg-transparent text-ink-muted hover:text-white border border-transparent',
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  href,
  ...props
}: ButtonProps) {
  const cls = `inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium leading-[1.43] transition-colors duration-200 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
