import { Container, Section, SectionHeader } from "./section";
import {
  ArrowUpRightIcon,
  FunnelIcon,
  MessageBubbleIcon,
} from "./icons";

const STEPS = [
  {
    n: "01",
    name: "Coletar",
    icon: MessageBubbleIcon,
    title: "Cada projeto ganha uma página pública",
    copy: "Os clientes enviam ideias e relatam problemas anonimamente, sem precisar de conta. Cada feedback chega ao seu quadro, pronto para a triagem.",
  },
  {
    n: "02",
    name: "Organizar",
    icon: FunnelIcon,
    title: "O feedback já chega no lugar certo",
    copy: "Cada envio nasce amarrado ao projeto, e o Impruv mantém os quadros separados. Marque os temas que se repetem e os padrões aparecem.",
  },
  {
    n: "03",
    name: "Melhorar",
    icon: ArrowUpRightIcon,
    title: "Da decisão à entrega",
    copy: "Os pedidos recorrentes viram decisões de roadmap. Marque o avanço de cada item, de novo a entregue, e mantenha todo o time alinhado.",
  },
] as const;

export function Workflow() {
  return (
    <Section id="workflow">
      <Container>
        <SectionHeader
          eyebrow="Como funciona"
          title="De muitas vozes a melhorias entregues."
          lede="Um fluxo de trabalho repetível que transforma feedback bruto em decisões visíveis para todo o time."
        />

        <ol className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((step) => (
            <li key={step.n}>
              <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-card text-accent">
                <step.icon className="size-5" />
              </div>
              <p className="mt-5 font-mono text-[11px] font-medium tracking-[0.16em] text-faint uppercase">
                {step.n} · {step.name}
              </p>
              <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
