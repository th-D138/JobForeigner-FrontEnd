import { z } from 'zod';

const REGEX = {
  phoneNumber: /^\d{2,3}-\d{3,4}-\d{4}$/,
};

const ERROR_MSG = {
  required: '필수 입력 항목입니다.',
  numberRequired: '1 이상의 숫자를 입력해주세요.',
  exceed: {
    ten: '10자 이내로 입력해주세요.',
    thirty: '30자 이내로 입력해주세요.',
    fifty: '50자 이내로 입력해주세요.',
    hundred: '100자 이내로 입력해주세요.',
    thousand: '1000자 이내로 입력해주세요.',
    twoThousand: '2000자 이내로 입력해주세요.',
    fiveThousand: '5000자 이내로 입력해주세요.',
  },
  phoneNumber: '올바른 전화번호를 입력해주세요.',
};

export const resumeSchema = z.object({
  title: z.string().min(1, ERROR_MSG.required).max(50, ERROR_MSG.exceed.fifty),
  name: z.string().min(1, ERROR_MSG.required).max(30, ERROR_MSG.exceed.thirty),
  email: z.string().email(ERROR_MSG.required).max(50, ERROR_MSG.exceed.fifty),
  phoneNumber: z
    .string()
    .min(1, ERROR_MSG.required)
    .regex(REGEX.phoneNumber, ERROR_MSG.phoneNumber),
  photo: z.instanceof(File).optional().nullable(),
  sido: z.string().min(1, ERROR_MSG.required),
  sigungu: z.string().min(1, ERROR_MSG.required),
  job: z.string().min(1, ERROR_MSG.required),
  skills: z.array(
    z.string().min(1, ERROR_MSG.required).max(30, ERROR_MSG.exceed.thirty),
  ),
  experiences: z.array(
    z.object({
      name: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      spot: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      period: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      mainTask: z.string().max(2000, ERROR_MSG.exceed.twoThousand),
    }),
  ),
  educations: z.array(
    z.object({
      school: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      major: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      degree: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(10, ERROR_MSG.exceed.ten),
      period: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      description: z.string().max(2000, ERROR_MSG.exceed.twoThousand),
    }),
  ),
  awards: z.array(
    z.object({
      name: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(50, ERROR_MSG.exceed.fifty),
      organization: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      date: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      description: z.string().max(2000, ERROR_MSG.exceed.twoThousand),
    }),
  ),
  certificates: z.array(
    z.object({
      name: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      organization: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      date: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      number: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
    }),
  ),
  files: z.array(z.instanceof(File)),
  links: z.array(
    z.object({
      title: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(30, ERROR_MSG.exceed.thirty),
      url: z
        .string()
        .min(1, ERROR_MSG.required)
        .max(1000, ERROR_MSG.exceed.thousand),
    }),
  ),
  introduction: z.string().max(5000, ERROR_MSG.exceed.fiveThousand),
});

export type ResumeValues = z.infer<typeof resumeSchema>;

export const validateResume = (formData: FormData) => {
  const formValues = Object.fromEntries(formData.entries());

  return resumeSchema.safeParse(formValues);
};
