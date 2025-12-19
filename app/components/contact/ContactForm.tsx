'use client';

import { useMemo, useState, type FormEvent } from 'react';
import BaseButton from '@/app/components/buttons/BaseButton';

type Web3FormsResponse = {
  success: boolean;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const accessKey = useMemo(() => process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '', []);
  const [status, setStatus] = useState<Status>('idle');
  const [result, setResult] = useState<string>('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus('error');
      setResult('Chave do Web3Forms não encontrada. Verifique o arquivo .env.local');
      return;
    }

    setStatus('sending');
    setResult('Enviando...');

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', accessKey);
    formData.append('from_name', 'Felipe Jovino — Portfólio');
    formData.append('subject', 'Novo contato pelo portfólio — Felipe Jovino');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = (await response.json()) as Web3FormsResponse;

      if (data.success) {
        setStatus('success');
        setResult('Mensagem enviada com sucesso! Vou te responder o quanto antes.');
        form.reset();
      } else {
        setStatus('error');
        setResult(data.message || 'Não foi possível enviar. Tente novamente.');
      }
    } catch {
      setStatus('error');
      setResult('Erro de rede. Por favor, tente novamente.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-2xl">
      <div className="mt-10 mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="sr-only" htmlFor="contact-name">
          Nome
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          className="field"
          autoComplete="name"
        />

        <label className="sr-only" htmlFor="contact-email">
          E-mail
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          className="field"
          autoComplete="email"
        />
      </div>

      <label className="sr-only" htmlFor="contact-message">
        Mensagem
      </label>
      <textarea
        id="contact-message"
        rows={6}
        name="message"
        placeholder="Escreva sua mensagem (proposta, parceria, dúvidas, orçamento, etc.)"
        required
        className="field field-textarea mb-6"
      />

      <div className="flex justify-center">
        <BaseButton
          type="submit"
          variant="theme"
          className="px-10 py-3"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
        </BaseButton>
      </div>

      {result && (
        <p className="mt-4 text-center" aria-live="polite">
          {result}
        </p>
      )}
    </form>
  );
}
