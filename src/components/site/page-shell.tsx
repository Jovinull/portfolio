import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <main className="relative flex flex-1 flex-col">
      <section className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-16 sm:pt-40">
        {eyebrow && (
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </section>
      {children && (
        <section className="mx-auto w-full max-w-6xl px-6 pb-32">{children}</section>
      )}
    </main>
  );
}
