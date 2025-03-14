import { formatPhoneNumber } from '@/lib/utils/formatters';
import Input from '../input/Input';
import FormField from '../form/FormField';
import FormItem from '../form/FormItem';
import FormLabel from '../form/FormLabel';
import FormMessage from '../form/FormMessage';
import type {
  Control,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';
import URLInput from '../input/URLInput';

type InputFieldProps = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  type?: 'text' | 'phone' | 'number' | 'date' | 'datetime-local' | 'url';
  placeholder?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const URLInputField = ({
  control,
  name,
  label,
  type = 'text',
  placeholder = '필수 입력 칸 입니다.',
  required = false,
}: InputFieldProps) => {
  const handleInput = (
    e: React.FormEvent<HTMLInputElement>,
    field: ControllerRenderProps<FieldValues, string>,
  ) => {
    const target = e.currentTarget;

    if (type === 'phone') {
      target.value = formatPhoneNumber(target.value);
      field.onChange(target.value);
      return;
    }

    field.onChange(target.value);
  };

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
          <URLInput
            {...field}
            placeholder={placeholder}
            onChange={e => handleInput(e, field)}
            onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
            type={type}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default URLInputField;
