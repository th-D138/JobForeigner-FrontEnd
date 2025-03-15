import { forwardRef } from 'react';
import { useFormField } from '@/lib/hooks/form/useFormField';
import { HTMLAttributes } from 'react';
import styles from './form.module.scss';

const FormMessage = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { error, formMessageId } = useFormField();

  if (!error) return null;

  const message = error.message;

  return (
    <p className={styles.formMessage} ref={ref} id={formMessageId} {...props}>
      {message}
    </p>
  );
});
FormMessage.displayName = 'FormMessage';

export default FormMessage;
