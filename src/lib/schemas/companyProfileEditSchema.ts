import { z } from 'zod';
import { ERROR_MSG } from './error';

const maxLogoSize = 2 * 1024 * 1024;

export const companyProfileEditSchema = z.object({
  logo: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine(file => {
      if (!file) {
        return true;
      }
      return file.size <= maxLogoSize;
    }),
  company: z
    .string()
    .min(1, ERROR_MSG.required)
    .max(30, ERROR_MSG.exceed.thirty),
  ceo: z.string().min(1, ERROR_MSG.required).max(30, ERROR_MSG.exceed.thirty),
  businessNumber: z
    .string()
    .min(1, ERROR_MSG.required)
    .max(30, ERROR_MSG.exceed.thirty),
  industry: z.string().min(1, ERROR_MSG.required),
  foundedYear: z.string(),
  employeeCount: z.string(),
  address: z.string().min(1, ERROR_MSG.required),
  phone: z.string().min(1, ERROR_MSG.required),
  email: z.string().min(1, ERROR_MSG.required),
  website: z.string(),
  description: z.string().max(2000, ERROR_MSG.exceed.twoThousand),
});

export type LoginValues = z.infer<typeof companyProfileEditSchema>;

export const validateLogin = (formData: FormData) => {
  const formValues = Object.fromEntries(formData.entries());

  return companyProfileEditSchema.safeParse(formValues);
};
