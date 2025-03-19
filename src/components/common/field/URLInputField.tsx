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
  type?: 'text' | 'url';
  placeholder?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * - React Hook Form URL 입력 필드 컴포넌트
 *   - URL 입력 필드 타입 지원
 *   - 필수 입력 칸 입니다. 메시지 표시 지원
 * - control: 폼 제어 객체
 * - name: 필드 이름
 * - label: 필드 레이블
 * - type: 필드 타입 "text" | "phone" | "number" | "date" | "datetime-local" | "url"
 *   - text: 텍스트 입력 필드
 *   - url: URL 입력 필드
 * - placeholder: 필드 플레이스홀더
 * - required: 필수 입력 여부
 * - 나머지 props: (onChange, onKeyDown 등) InputHTMLAttributes(input 태그의 속성)
 */
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
              <span
                aria-label='required'
                style={{ color: 'var(--color-red-500)' }}
              >
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
