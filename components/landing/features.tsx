import type { ComponentType, SVGProps } from "react";
import { SIGN_UP_URL } from "./links";
import { Container, Section, SectionHeader } from "./section";
import {
  ArrowRightIcon,
  BoardIcon,
  BrowserIcon,
  FunnelIcon,
  OrganizationIcon,
  SidebarIcon,
  TeamIcon,
} from "./icons";

const CARD_CLASS =
  "rounded-2xl border border-line bg-card p-6 transition duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card-hover";

const ICON_CHIP_CLASS =
  "flex size-10 items-center justify-center rounded-lg border border-line bg-ink/[0.03] text-accent";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  copy: string;
  /** Spans two columns and carries the public-link proof chip. */
  featured?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: BrowserIcon,
    title: "Páginas públicas de feedback",
    copy: "Cada projeto ganha sua própria página em um link limpo. Os clientes postam anonimamente, sem cadastro, e cada feedback chega já organizado no projeto certo.",
    featured: true,
  },
  {
    icon: OrganizationIcon,
    title: "Organizações",
    copy: "Um espaço de trabalho para toda a empresa. Convide as pessoas certas e mantenha o feedback de cada projeto claramente separado.",
  },
  {
    icon: BoardIcon,
    title: "Projetos",
    copy: "Crie um projeto para cada produto, plataforma ou time. Cada um ganha seu próprio quadro e sua página pública, e o feedback já chega no lugar certo.",
  },
  {
    icon: FunnelIcon,
    title: "Gestão de feedback",
    copy: "Tudo o que chega fica sob o controle do time: revise, marque temas e acompanhe cada item, do novo ao entregue.",
  },
  {
    icon: TeamIcon,
    title: "Funções e permissões do time",
    copy: "Administradores gerenciam a organização, os projetos e os membros. Membros focam no trabalho com feedback, e cada função tem o nível certo de acesso.",
  },
  {
    icon: SidebarIcon,
    title: "Uma interface que se adapta",
    copy: "Navegação e ações mudam conforme a função: configurações e gestão de membros para admins; um espaço focado em feedback para membros.",
  },
];

/** The featured card carries a small proof: the public link itself. */
function PublicLinkChip() {
  return (
    <div className="flex items-center gap-2.5 self-start rounded-lg border border-line bg-paper px-3.5 py-2.5 font-mono text-[13px] text-muted text-nowrap">
      <BrowserIcon className="size-4 shrink-0 text-faint" />
      impruv.app/p/mobile-app
    </div>
  );
}

export function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeader
          eyebrow="Funcionalidades"
          title="Tudo o que um fluxo de feedback precisa."
          lede="O Impruv reúne coleta, organização e ação em um só lugar, estruturado do jeito que o seu time realmente trabalha."
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, copy, featured }) => (
            <li
              key={title}
              className={featured ? `${CARD_CLASS} sm:col-span-2` : CARD_CLASS}
            >
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="max-w-md">
                  <div className={ICON_CHIP_CLASS}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {copy}
                  </p>
                </div>
                {featured ? <PublicLinkChip /> : null}
              </div>
            </li>
          ))}

          {/*
            The grid's focal point: the one solid-green surface on the
            page, the invitation to get started.
          */}
          <li className="rounded-2xl bg-accent p-7 text-on-accent sm:col-span-2 lg:col-span-2 lg:p-8">
            <p className="font-display text-2xl font-medium tracking-tight">
              Pronto para começar a ouvir?
            </p>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-on-accent/80">
              Crie sua organização, monte o primeiro projeto e compartilhe a
              página pública de feedback.
            </p>
            <a
              href={SIGN_UP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-medium underline-offset-4 transition-colors duration-200 hover:underline"
            >
              Criar sua organização
              <ArrowRightIcon className="size-4" />
            </a>
          </li>
        </ul>
      </Container>
    </Section>
  );
}
