import React from "react";
import { ArrowRight, Sparkle, Layers, Rocket, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/20">
              <Sparkle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Sistem</p>
              <p className="text-lg font-semibold text-slate-900">Inova Gestão</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#sobre" className="transition hover:text-slate-900">
              Sobre
            </a>
            <a href="#plano" className="transition hover:text-slate-900">
              Plano
            </a>
            <a href="#inove" className="transition hover:text-slate-900">
              Inove
            </a>
            <Link
              to="/login"
              className="rounded-full border border-slate-300 bg-slate-100 px-5 py-2 text-slate-900 transition hover:bg-slate-200"
            >
              Entrar
            </Link>
          </nav>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400 md:hidden"
          >
            Entrar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-sky-100 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700 ring-1 ring-sky-200">
                  Sistema de gestão moderno para equipes inovadoras
                </span>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    Gestão completa,
                    <br />
                    simples e pronta para escalar.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                    Conecte seu time, controle produtos e categorias, e acelere sua operação com uma
                    interface rápida e responsiva para desktop, tablet e celular.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-500"
                  >
                    Entrar agora
                  </Link>
                  <a
                    href="#sobre"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Conhecer o sistema
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Visão</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900">
                      Transforme operações em decisões rápidas.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Segurança</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900">
                      Acesso seguro com controle de usuários e histórico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">
                    Controle centralizado
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Todas as informações do seu sistema em um painel único e organizado para tablets
                    e desktops.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">Entrega rápida</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Interface ágil para dispositivos móveis, com navegação simples e performance
                    superior.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">Confiança</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Backoffice seguro e confiável para gerir produtos, categorias e usuários com
                    facilidade.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-slate-900">Foco no time</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Perfeito para equipes que precisam inflar resultados com menos retrabalho e mais
                    colaboração.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="border-t border-slate-200 bg-slate-100 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-700">Sobre o sistema</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                  Um ERP leve com foco em gestão de produtos e categorias.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  O Inova Gestão é desenhado para empresas que precisam de um sistema moderno, fácil
                  de usar e responsivo em todos os tamanhos de tela. Comece com um painel intuitivo
                  e crie fluxos práticos para todo o time.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Página de entrada moderna
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Design limpo, com navegação clara para entrar e se informar sobre o sistema.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Layout responsivo</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Funciona bem no desktop, tablet e celular, com tipografia e espaços ajustados
                    automaticamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="plano" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-rose-600">Plano</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
                  Plano ideal para startups e pequenas empresas
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Uma plataforma com tudo o que você precisa para começar: controle de produtos,
                  categorias, acesso rápido e relatórios intuitivos. Sem complicação, apenas
                  resultados.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Essencial
                    </p>
                    <p className="mt-3 text-2xl font-bold text-slate-950">Acesso rápido</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Escalável
                    </p>
                    <p className="mt-3 text-2xl font-bold text-slate-950">Cresça com o sistema</p>
                  </div>
                </div>
              </div>
              <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-5 border border-slate-200">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Plano inicial</p>
                      <p className="mt-1 text-4xl font-bold text-slate-950">R$ 0</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                      Test drive
                    </span>
                  </div>
                  <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-100 text-sky-600">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      Cadastro de produtos e categorias
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-100 text-sky-600">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      Acesso via login seguro
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-100 text-sky-600">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      Interface otimizada para dispositivos móveis
                    </li>
                  </ul>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-sky-500"
                  >
                    Começar agora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inove" className="border-t border-slate-200 bg-slate-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-700">Inove</p>
                <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
                  Inove com um sistema pensado para a nova era digital
                </h2>
                <p className="text-lg leading-8 text-slate-600">
                  Evite sistemas complexos. Com o Inova Gestão, sua equipe foca no que importa:
                  entregar mais, com menos erros e maior visibilidade do resultado.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                    Melhore processos
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    Automatize o fluxo de conteúdo
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Menos tempo perdida em tarefas repetitivas e mais controle no seu trabalho
                    diário.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Inove já</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">Seja mais rápido</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Navegação fluida para todos os dispositivos, com um design que prioriza ação e
                    resultado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
