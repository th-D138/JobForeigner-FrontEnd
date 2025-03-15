import { LinkIcon } from 'lucide-react';
import styles from './URLInput.module.scss';
import clsx from 'clsx';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

const URLInput = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <div className={styles.icon}>
          <LinkIcon />
        </div>
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

export default URLInput;
