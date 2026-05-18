import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe pelo menos 2 caracteres.")
    .max(80, "Máximo de 80 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "E-mail é obrigatório.")
    .email("Informe um e-mail válido."),
  subject: z
    .string()
    .trim()
    .min(4, "Assunto muito curto.")
    .max(120, "Máximo de 120 caracteres."),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais (mínimo 10 caracteres).")
    .max(2000, "Limite de 2000 caracteres."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactDefaultValues: ContactInput = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
