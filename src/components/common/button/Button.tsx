import styles from './button.module.scss';
import clsx from 'clsx';

type Props = {
  children: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  background?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = '',
  size = 'medium',
  color = '#000000',
  background = 'none',
  onClick,
  ...props
}: Props) {
  return (
    <button
      className={clsx(styles.button, styles[size], className)}
      style={{ color, background }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
