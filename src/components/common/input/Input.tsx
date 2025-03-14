import { MapPin, Search } from 'lucide-react';
import styles from './input.module.scss';
import clsx from 'clsx';
import { forwardRef } from 'react';

const getIcon = (icon?: string) => {
  switch (icon) {
    case 'search':
      return <Search className={styles.icon} />;
    case 'map-pin':
      return <MapPin className={styles.icon} />;
    default:
      return null;
  }
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        {getIcon(icon)}
        <input
          ref={ref}
          className={clsx(styles.input, icon && styles.isIcon)}
          onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
          {...props}
        />
      </div>
    );
  },
);

export default Input;
