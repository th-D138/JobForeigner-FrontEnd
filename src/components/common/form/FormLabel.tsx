import { forwardRef } from 'react';
import { LabelHTMLAttributes } from 'react';
import { useFormField } from '@/lib/hooks/form/useFormField';

const FormLabel = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { formItemId } = useFormField();

  return <label ref={ref} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = 'FormLabel';

export default FormLabel;
