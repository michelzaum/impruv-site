import { Logo } from "./logo";
import { ButtonLink } from "./button";
import { SIGN_UP_URL } from "./links";
import { Container } from "./section";

const NAV_LINKS = [
  { href: "#workflow", label: "Como funciona" },
  { href: "#features", label: "Funcionalidades" },
  { href: "#publica", label: "Página pública" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* TODO: point at the marketing home route when it exists */}
          <a href="#" aria-label="Impruv, início" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* TODO: wire to the sign-in route */}
            <ButtonLink
              href="#"
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Entrar
            </ButtonLink>
            <ButtonLink href={SIGN_UP_URL} size="sm">
              Começar
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
