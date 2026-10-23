import { Logo } from "./logo";
import { isExternal, NEW_TAB_PROPS, SIGN_IN_URL } from "./links";
import { Container } from "./section";

const FOOTER_LINKS = [
  { href: "#workflow", label: "Como funciona" },
  { href: "#features", label: "Funcionalidades" },
  { href: "#publica", label: "Página pública" },
  { href: SIGN_IN_URL, label: "Entrar" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container>
        <div className="py-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <Logo />
            <nav
              aria-label="Rodapé"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
            >
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(isExternal(link.href) ? NEW_TAB_PROPS : {})}
                  className="transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-2 border-t border-line pt-6 text-[13px] text-faint sm:flex-row sm:items-center">
            <p>Feedback de clientes, transformado em melhorias no produto.</p>
            <p>© 2026 Impruv</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
