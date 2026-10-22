import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Workflow } from "@/components/landing/workflow";
import { Features } from "@/components/landing/features";
import { PublicPage } from "@/components/landing/public-page";
import { Cta } from "@/components/landing/cta";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Workflow />
        <Features />
        <PublicPage />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
