import { Container, Section, SectionHeader } from "./section";

/**
 * The public page: where feedback is born. The customer writes and sends,
 * anonymously and without an account, and the submission lands in the
 * right project board on its own.
 */
function PublicFormMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-panel">
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
        <div className="flex flex-1 justify-center">
          <span className="rounded-md border border-line bg-paper px-3 py-1 font-mono text-[11px] text-faint">
            impruv.app/p/mobile-app
          </span>
        </div>
        <div className="w-8" aria-hidden="true" />
      </div>

      {/* the submission form: one field, no account, no name */}
      <div className="p-6 sm:p-7">
        <p className="text-sm font-medium text-ink">Deixe seu feedback</p>
        <div className="mt-3 rounded-xl border border-line bg-paper px-4 py-3.5">
          <p className="font-display text-[17px] leading-snug text-ink italic">
            “Adoraria um modo escuro para ler à noite.”
            <span
              className="ml-0.5 inline-block h-[1.05em] w-px animate-caret bg-accent align-[-0.15em]"
              aria-hidden="true"
            />
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.08em] text-faint uppercase">
            Anônimo · Sem cadastro
          </p>
          <span className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper">
            Enviar feedback
          </span>
        </div>
      </div>
    </div>
  );
}

export function PublicPage() {
  return (
    <Section id="publica" className="border-y border-line bg-accent/[0.045]">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            align="left"
            eyebrow="Página pública"
            title="Do site do cliente ao quadro do time."
            lede="Cada projeto tem um endereço público: um link simples para compartilhar com qualquer cliente. O envio é anônimo, não precisa de conta, e o feedback já nasce no projeto certo, separado no quadro do time."
          />
          <PublicFormMock />
        </div>
      </Container>
    </Section>
  );
}
