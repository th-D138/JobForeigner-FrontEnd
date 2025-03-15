import React from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

type ButtonVariant = 'default' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * - variant: "default" | "outline"
 * - 나머지 props: (onClick, children 등) ButtonHTMLAttributes
 */
export default function Button({
  variant = 'default',
  size = 'small',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[variant], styles[size])}
      {...props}
    >
      {children}
    </button>
  );
}
