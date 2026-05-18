"use server";

import { Resend } from "resend";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";

export type SendEmailResult =
  | { success: true }
  | {
      success: false;
      error: string;
      fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
    };

const TARGET_EMAIL = "felipejovinogamerplay@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(data: ContactInput): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const subject = escapeHtml(data.subject);
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html lang="pt-BR">
  <body style="margin:0;padding:24px;background:#0a0a0f;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#fafafa;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#0f0f14;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:24px 24px 12px;background:linear-gradient(135deg,#8b5cf6,#06b6d4);">
          <p style="margin:0;font-family:ui-monospace,SFMono-Regular,monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.85);">Portfolio · Novo contato</p>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff;">${subject}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <p style="margin:0 0 8px;font-size:13px;color:#a1a1aa;">De</p>
          <p style="margin:0;font-size:16px;font-weight:600;color:#fafafa;">${name}</p>
          <p style="margin:4px 0 0;font-size:14px;color:#a78bfa;">
            <a href="mailto:${email}" style="color:#a78bfa;text-decoration:none;">${email}</a>
          </p>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:20px 0;" />
          <p style="margin:0 0 8px;font-size:13px;color:#a1a1aa;">Mensagem</p>
          <p style="margin:0;font-size:15px;line-height:1.6;color:#fafafa;">${message}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px 24px;border-top:1px solid rgba(255,255,255,0.08);">
          <p style="margin:0;font-size:11px;color:#52525b;">
            Enviado automaticamente pelo formulário do portfólio.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildText(data: ContactInput): string {
  return [
    `Novo contato pelo portfólio`,
    ``,
    `De: ${data.name} <${data.email}>`,
    `Assunto: ${data.subject}`,
    ``,
    `Mensagem:`,
    data.message,
  ].join("\n");
}

export async function sendContactEmail(
  input: ContactInput,
): Promise<SendEmailResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: "Dados inválidos. Revise os campos e tente novamente.",
      fieldErrors: parsed.error.flatten().fieldErrors as Partial<
        Record<keyof ContactInput, string[]>
      >,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      success: false,
      error:
        "Configuração de e-mail indisponível no momento. Use os canais diretos abaixo.",
    };
  }

  const fromAddress =
    process.env.RESEND_FROM_EMAIL?.trim() || "Portfolio <onboarding@resend.dev>";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [TARGET_EMAIL],
      replyTo: parsed.data.email,
      subject: `[Portfólio] ${parsed.data.subject}`,
      html: buildHtml(parsed.data),
      text: buildText(parsed.data),
    });

    if (error) {
      console.error("[send-email] resend error", error);
      return {
        success: false,
        error: "Não foi possível enviar agora. Tente novamente em instantes.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("[send-email] unexpected error", err);
    return {
      success: false,
      error: "Erro inesperado ao enviar. Tente novamente ou use os canais diretos.",
    };
  }
}
