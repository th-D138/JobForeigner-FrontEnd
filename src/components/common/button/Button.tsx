import React from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'default' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/**
 * - variant: "default" | "outline"
 * - 나머지 props: (onClick, children 등) ButtonHTMLAttributes
 */
export default function Button({
  variant = 'default',
  children,
  ...props
}: ButtonProps) {
  // variant에 따라 다른 스타일 적용
  const className = `${styles.button} ${
    variant === 'outline' ? styles.outline : styles.default
  }`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
