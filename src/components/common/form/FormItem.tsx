import { forwardRef, useId } from 'react';
import { FormFieldIdContext } from '@/lib/contexts/FormContext';
import styles from './form.module.scss';

const FormItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const id = useId();

  return (
    <FormFieldIdContext.Provider value={{ id }}>
      <div className={styles.formField} ref={ref} {...props} />
    </FormFieldIdContext.Provider>
  );
});
FormItem.displayName = 'FormItem';

export default FormItem;
