import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <div className="flex items-center gap-3" aria-label="OPUS">
          <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">O</span>
          <span className="text-lg font-bold tracking-widest">OPUS</span>
        </div>
        <span className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground">Um novo começo</span>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12 sm:py-20">
        <section className="w-full max-w-3xl rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-xl shadow-indigo-100/40 sm:px-16 sm:py-20" aria-labelledby="welcome-title">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-xs font-semibold tracking-wide text-primary">
            <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
            ESPAÇO PARA NOVAS IDEIAS
          </span>
          <h1 id="welcome-title" className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Grandes ideias.<br />
            <span className="text-primary">Novos começos.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todo projeto começa com um primeiro passo. Este é o seu espaço para transformar ideias em algo especial.
          </p>
          <Button className="mt-9" onClick={() => setShowMessage((current) => !current)} aria-expanded={showMessage} aria-controls="welcome-message">
            {showMessage ? 'Ocultar mensagem' : 'Começar por aqui'}
            <span aria-hidden="true">{showMessage ? '−' : '→'}</span>
          </Button>
          <div id="welcome-message" role="status" aria-live="polite" className="mt-6 min-h-12">
            {showMessage && (
              <p className="rounded-xl bg-muted px-4 py-3 text-sm font-medium text-primary">
                Olá, mundo! Que bom ter você por aqui. Seu próximo capítulo começa agora.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="px-6 py-6 text-center text-xs text-muted-foreground">
        OPUS · Feito para dar vida às suas ideias.
      </footer>
    </div>
  )
}
