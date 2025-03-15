import FormField from '../form/FormField';
import FormItem from '../form/FormItem';
import FormLabel from '../form/FormLabel';
import FormMessage from '../form/FormMessage';
import type { Control, FieldValues } from 'react-hook-form';
import Textarea from '../textarea/Textarea';

type TextareaFieldProps = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextareaField = ({
  control,
  name,
  label,
  placeholder = '필수 입력 칸 입니다.',
  required = false,
}: TextareaFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} &nbsp;{' '}
            {required && (
              <span aria-label='required' style={{ color: '#ff7f00' }}>
                *
              </span>
            )}
          </FormLabel>
          <Textarea
            {...field}
            placeholder={placeholder}
            onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;
