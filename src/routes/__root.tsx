import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-background px-6 text-center text-foreground">
      <h1 className="text-3xl font-bold">Página não encontrada</h1>
      <Link to="/" className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        Voltar ao início
      </Link>
    </main>
  ),
})
