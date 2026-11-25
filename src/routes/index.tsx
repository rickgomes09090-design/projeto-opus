import { useState } from 'react';
import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from '@/routes/__root';
import { Button } from '@/components/ui/button';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

function HomePage() {
  const [inspired, setInspired] = useState(false);

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
        <a href="/" aria-label="OPUS, página inicial" className="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xl font-black text-background">o</span>
          <span className="text-lg font-bold tracking-[0.2em]">OPUS</span>
        </a>
        <span className="rounded-full border border-border px-4 py-2 text-xs text-muted">Um novo começo</span>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-14 sm:px-10 sm:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <section>
            <p className="mb-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
              Espaço para novas ideias
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">
              Grandes ideias.<br />
              <span className="text-primary">Novos começos.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-8 text-muted sm:text-lg">
              Todo projeto começa com uma possibilidade. Este é o seu espaço para imaginar, criar e dar o próximo passo.
            </p>
            <Button className="mt-9" onClick={() => setInspired((value) => !value)} aria-pressed={inspired} aria-controls="inspiration">
              {inspired ? 'Voltar ao início' : 'Uma dose de inspiração'}
              <span aria-hidden="true">↗</span>
            </Button>
            <p id="inspiration" role="status" className="mt-5 min-h-12 max-w-md text-sm leading-6 text-muted">
              {inspired ? 'Você não precisa ter todas as respostas. Uma pequena ideia já é um ótimo começo.' : 'Simples por fora. Cheio de possibilidades por dentro.'}
            </p>
          </section>

          <aside aria-label="Ideia em destaque" className="relative rounded-[2rem] border border-border bg-card p-7 shadow-2xl sm:p-10">
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="uppercase tracking-[0.2em]">O próximo capítulo</span>
              <span>01 / 01</span>
            </div>
            <div aria-hidden="true" className="relative mx-auto my-12 flex h-48 w-48 items-center justify-center rounded-full border border-primary/20 sm:h-56 sm:w-56">
              <div className="absolute h-36 w-36 rounded-full border border-primary/40 sm:h-40 sm:w-40" />
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-5xl text-background shadow-[0_0_60px_0_rgba(196,242,124,0.15)]">✳</div>
              <div className="absolute right-2 top-9 h-4 w-4 rounded-full bg-primary" />
            </div>
            <h2 className="text-2xl font-medium tracking-tight">O futuro começa aqui.</h2>
            <p className="mt-3 text-sm leading-7 text-muted">Uma página em branco é um convite para fazer algo extraordinário.</p>
            <div className="mt-8 flex items-center gap-2 border-t border-border pt-6 text-xs text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              Feito para explorar possibilidades
            </div>
          </aside>
        </div>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-7 text-xs text-muted sm:px-10">
        <span>OPUS · Ideias que ganham forma.</span>
        <span>Menos ruído. Mais possibilidades.</span>
      </footer>
    </div>
  );
}
