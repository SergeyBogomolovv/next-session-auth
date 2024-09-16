import { z } from "zod";

export const UserModel = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  avatar: z.nullable(z.string()),
});

export type User = z.infer<typeof UserModel>;
