import { ButtonLink } from "./button";
import { Container } from "./section";
import { StatusPill, type FeedbackStatus } from "./status-pill";
import { ArrowDownIcon, BoardIcon } from "./icons";

/*
  The signature: a believable slice of the product, the project board.
  The first card is alive: its status travels Novo → Planejado →
  Entregue on a loop. The whole promise of Impruv, told without a
  single line of copy.
*/

type BoardRow = {
  quote: string;
  status: FeedbackStatus;
  /** This row's status cycles through every stage (hero signature). */
  animated?: boolean;
};

/*
  v1: submissions are anonymous, with no author names, categories or
  votes yet, so the board is a clean triage feed.
*/
const BOARD_ROWS: BoardRow[] = [
  {
    quote: "Adoraria um modo escuro para ler à noite.",
    status: "new",
    animated: true,
  },
  {
    quote: "Modo offline para as listas de aulas salvas.",
    status: "new",
  },
  {
    quote: "O botão de exportação está escondido nas Configurações.",
    status: "review",
  },
  {
    quote: "Edição em massa de membros da equipe.",
    status: "shipped",
  },
];

/** The animated three-stage status of the signature card. */
function CyclingStatus() {
  return (
    <span className="relative inline-grid">
      <StatusPill status="new" className="anim-stage-new [grid-area:1/1]" />
      <StatusPill
        status="planned"
        className="anim-stage-planned opacity-0 [grid-area:1/1]"
      />
      <StatusPill
        status="shipped"
        className="anim-stage-shipped opacity-0 [grid-area:1/1]"
      />
    </span>
  );
}

function BoardPanel() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-card text-left shadow-panel">
      {/* panel chrome: the project and its board */}
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-line bg-ink/[0.03] text-muted">
            <BoardIcon className="size-4.5" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">
              App Mobile · Feedback
            </p>
            <p className="truncate font-mono text-[11px] text-faint">
              Quadro do projeto
            </p>
          </div>
        </div>
        <p className="hidden shrink-0 font-mono text-[11px] text-faint sm:block">
          42 envios
        </p>
      </div>

      {/* the board itself */}
      <ol className="divide-y divide-line px-5 sm:px-6">
        {BOARD_ROWS.map((row) => (
          <li key={row.quote} className="py-4">
            {/* the customer's voice: always serif, always italic */}
            <p className="font-display text-[17px] leading-snug text-ink italic">
              “{row.quote}”
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[13px] text-faint">
              {row.animated ? <CyclingStatus /> : null}
              {!row.animated ? <StatusPill status={row.status} /> : null}
            </div>
          </li>
        ))}
      </ol>

      {/* panel footer: the public page, explained in one line */}
      <div className="border-t border-line px-5 py-3.5 sm:px-6">
        <p className="text-[13px] text-faint">
          Os clientes enviam feedback anonimamente pela página pública, sem
          precisar de conta.
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="board-texture texture-fade absolute inset-0"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl pt-20 pb-14 text-center sm:pt-28 sm:pb-16">
          <p className="animate-rise font-mono text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
            Gestão de feedback de clientes
          </p>
          <h1
            className="animate-rise mt-5 font-display text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] text-balance text-ink sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "70ms" }}
          >
            Transforme o <em className="text-accent">feedback</em> dos
            clientes em melhorias no produto.
          </h1>
          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            O Impruv dá ao seu time um lugar único para coletar o que os
            clientes dizem, organizar por projeto e entregar o que importa,
            para que nenhum insight se perca na caixa de entrada.
          </p>
          <div
            className="animate-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "210ms" }}
          >
            <ButtonLink href="#cta" size="lg">
              Começar a coletar
            </ButtonLink>
            <ButtonLink href="#workflow" variant="secondary" size="lg">
              <ArrowDownIcon className="size-4" />
              Como funciona
            </ButtonLink>
          </div>
        </div>

        <div
          className="animate-rise mx-auto max-w-3xl pb-24 sm:pb-28"
          style={{ animationDelay: "280ms" }}
        >
          <BoardPanel />
        </div>
      </Container>
    </section>
  );
}
