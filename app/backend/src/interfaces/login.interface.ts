import { z } from 'zod';

const loginZodSchema = z.object({
  email: z.string(),
  password: z.string().min(8),
});

export type ILogin = z.infer<typeof loginZodSchema>;
export default loginZodSchema;
