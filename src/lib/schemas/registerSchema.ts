import { z } from 'zod';
import { ERROR_MSG } from './error';
import { REGEX } from './regex';

export const registerSchema = z.object({
  email: z.string().email(ERROR_MSG.email).max(50, ERROR_MSG.exceed.fifty),
  password: z.string().min(8, ERROR_MSG.password.min),
  name: z.string().min(1, ERROR_MSG.required).max(30, ERROR_MSG.exceed.thirty),
  sex: z.string().min(1, ERROR_MSG.required),
  phoneNumber: z
    .string()
    .min(1, ERROR_MSG.required)
    .regex(REGEX.phoneNumber, ERROR_MSG.phoneNumber),
  nationality: z.string().min(1, ERROR_MSG.required),
  visaStatus: z.string(),
  languageAbility: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
  interests: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
});

export type RegisterValues = z.infer<typeof registerSchema>;

export const validateRegister = (formData: FormData) => {
  const formValues = Object.fromEntries(formData.entries());

  return registerSchema.safeParse(formValues);
};
