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

type InputFieldProps = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  type?: 'text' | 'password' | 'phone' | 'number' | 'date' | 'datetime-local';
  placeholder?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * - React Hook Form 일반 입력 필드 컴포넌트
 *   - 텍스트, 전화번호, 숫자, 날짜, 시간 입력 필드 타입 지원
 *   - 전화번호 입력 시 자동 포맷팅 지원
 *   - 필수 입력 칸 입니다. 메시지 표시 지원
 * - control: 폼 제어 객체
 * - name: 필드 이름
 * - label: 필드 레이블
 * - type: 필드 타입 "text" | "phone" | "number" | "date" | "datetime-local"
 *   - text: 텍스트 입력 필드
 *   - password: 비밀번호 입력 필드
 *   - phone: 전화번호 입력 필드
 *   - number: 숫자 입력 필드
 *   - date: 날짜 입력 필드
 *   - datetime-local: 날짜 및 시간 입력 필드
 * - placeholder: 필드 플레이스홀더
 * - required: 필수 입력 여부
 * - 나머지 props: (onChange, onKeyDown 등) InputHTMLAttributes(input 태그의 속성)
 */
const InputField = ({
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
              <span
                aria-label='required'
                style={{ color: 'var(--color-red-500)' }}
              >
                *
              </span>
            )}
          </FormLabel>
          <Input
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

export default InputField;
