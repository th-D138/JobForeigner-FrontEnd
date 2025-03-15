import { Control } from 'react-hook-form';
import FormField from '../form/FormField';
import FormItem from '../form/FormItem';
import FormLabel from '../form/FormLabel';
import Select from '../select/Select';

type Props = {
  control: Control;
  name: string;
  label: string;
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[];
};

export default function SelectField({
  control,
  name,
  label,
  required = false,
  options,
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>
              {label} &nbsp;{' '}
              {required && (
                <span style={{ color: 'var(--color-red-500)' }}>*</span>
              )}
            </FormLabel>
            <Select {...field} options={options} />
          </FormItem>
        );
      }}
    />
  );
}
