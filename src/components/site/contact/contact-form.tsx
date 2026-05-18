"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Send, Loader2 } from "lucide-react";

import {
  contactSchema,
  contactDefaultValues,
  type ContactInput,
} from "@/lib/schemas/contact";
import { sendContactEmail } from "@/actions/send-email";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [pending, startTransition] = useTransition();
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaultValues,
    mode: "onTouched",
  });

  function onSubmit(values: ContactInput) {
    startTransition(async () => {
      const result = await sendContactEmail(values);

      if (result.success) {
        toast.success("Mensagem enviada!", {
          description:
            "Te respondo o quanto antes — costuma ser em menos de 24h.",
        });
        form.reset();
        return;
      }

      toast.error("Não foi possível enviar.", {
        description: result.error,
      });

      if (result.fieldErrors) {
        for (const [field, messages] of Object.entries(result.fieldErrors)) {
          const first = messages?.[0];
          if (first) {
            form.setError(field as keyof ContactInput, {
              type: "server",
              message: first,
            });
          }
        }
      }
    });
  }

  const messageValue = form.watch("message");
  const messageLength = messageValue?.length ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur sm:p-8"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 size-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />

      <div className="relative">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Formulário
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Envie sua mensagem
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Resposta direta no meu inbox. Sem bots, sem CRM.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Como posso te chamar?"
                        autoComplete="name"
                        disabled={pending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="voce@empresa.com"
                        autoComplete="email"
                        disabled={pending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Oportunidade, parceria, mentoria…"
                      disabled={pending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between gap-2">
                    <FormLabel>Mensagem</FormLabel>
                    <span
                      data-warn={messageLength > 1800}
                      className="font-mono text-[10px] text-muted-foreground data-[warn=true]:text-amber-400"
                    >
                      {messageLength} / 2000
                    </span>
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Conte o contexto, o desafio e o que você precisa. Quanto mais direto, melhor."
                      rows={6}
                      disabled={pending}
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-muted-foreground">
                Ao enviar, você concorda em receber retorno via e-mail.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={pending}
                className="h-11 gap-2 px-5 font-semibold"
              >
                {pending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Enviar mensagem
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
