import { forwardRef } from 'react';
import styles from './textarea.module.scss';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return (
      <div className={styles.textareaWrapper}>
        <textarea
          ref={ref}
          className={styles.textarea}
          onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
          {...props}
        />
      </div>
    );
  },
);

export default Textarea;
