import { z } from 'zod';
import { ERROR_MSG } from './error';
import { REGEX } from './regex';

const maxPhotoSize = 50 * 1024 * 1024;

export const resumeSchema = z.object({
  title: z.string().min(1, ERROR_MSG.required).max(50, ERROR_MSG.exceed.fifty),
  name: z.string().min(1, ERROR_MSG.required).max(30, ERROR_MSG.exceed.thirty),
  email: z.string().email(ERROR_MSG.required).max(50, ERROR_MSG.exceed.fifty),
  phoneNumber: z
    .string()
    .min(1, ERROR_MSG.required)
    .regex(REGEX.phoneNumber, ERROR_MSG.phoneNumber),
  photo: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine(file => {
      if (!file) {
        return true;
      }
      return file.size <= maxPhotoSize;
    }),
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
