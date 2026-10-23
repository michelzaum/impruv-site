import { ButtonLink } from "./button";
import { SIGN_UP_URL } from "./links";
import { Container, Section } from "./section";

export function Cta() {
  return (
    <Section id="cta" className="text-center">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-balance text-ink sm:text-5xl">
            Seus clientes já estão falando.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted">
            Dê às palavras deles um lugar para pousar e um caminho até a
            entrega.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={SIGN_UP_URL} size="lg">
              Criar sua organização
            </ButtonLink>
            {/* TODO: wire to the sign-in route */}
            <ButtonLink href="#" variant="secondary" size="lg">
              Entrar
            </ButtonLink>
          </div>

          <p className="mt-8 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
            O Impruv está em desenvolvimento ativo
          </p>
        </div>
      </Container>
    </Section>
  );
}
