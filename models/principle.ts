import { z } from "https://deno.land/x/zod@v3.23.6/mod.ts";

const PrincipleValidator = z.object({
  id: z.string(),
  content: z.string(),
  vote: z.number(),
});

export type Principle = z.infer<typeof PrincipleValidator>;

export function isPrinciple(object: any) {
  return PrincipleValidator.parse(object);
}
