import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  X,
  Zap,
  Clock,
  Smartphone,
  Target,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import beforeAfter from "@/assets/before-after.jpg";
import resultado from "@/assets/resultado.jpg";
import kitMockup from "@/assets/kit-mockup.png";
import bonus1 from "@/assets/bonus1.jpg";
import bonus2 from "@/assets/bonus2.jpg";
import bonus3 from "@/assets/bonus3.jpg";
import bonus4 from "@/assets/bonus4.jpg";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+100 Projetos de Sítios Produtivos com Medidas Reais" },
      {
        name: "description",
        content:
          "Transforme terra parada em fonte de renda com +100 projetos prontos de sítios produtivos, com medidas reais e bônus exclusivos.",
      },
      { property: "og:title", content: "+100 Projetos de Sítios Produtivos" },
      {
        property: "og:description",
        content: "Projetos prontos, com medidas reais, para transformar seu sítio em fonte de renda.",
      },
    ],
  }),
  component: Index,
});

const CTA_URL = "#comprar";

function NeonCTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CTA_URL}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-brand-neon px-8 py-4 text-center font-display text-sm tracking-wide text-brand-bg shadow-[0_10px_40px_-10px_#c4ff2e] transition-transform hover:scale-[1.02] active:scale-95 sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  children,
  highlight,
  className = "",
}: {
  children: React.ReactNode;
  highlight?: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-center font-display text-3xl uppercase leading-tight text-white sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
      {highlight && (
        <span className="ml-2 inline-block bg-brand-neon px-3 py-1 text-brand-bg">{highlight}</span>
      )}
    </h2>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-white antialiased">
      {/* Top urgency bar */}
      <div className="flex items-center justify-center gap-2 bg-brand-red px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
        <Clock className="h-4 w-4" />
        Oferta disponível apenas hoje, 30/06/2026
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl leading-tight text-white sm:text-5xl md:text-6xl">
            +100 Projetos de Sítios e Chácaras Produtivas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-2xl uppercase leading-tight text-brand-neon underline decoration-brand-neon decoration-4 underline-offset-8 sm:text-4xl">
            Para Transformar Terra Parada em Fonte de Renda
          </p>

          {/* Video placeholder */}
          <div className="mx-auto mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 ring-1 ring-white/10">
            <div className="flex h-full w-full items-center justify-center text-sm text-white/60">
              <div className="flex flex-col items-center gap-2">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white/10 backdrop-blur">
                  <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
                </div>
                <span>Vídeo da oferta</span>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-base text-slate-300 sm:text-lg">
            Pare de perder dinheiro com terra mal aproveitada. Use{" "}
            <strong className="text-white">projetos prontos</strong> e comece a organizar seu sítio
            ainda hoje.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200 sm:text-sm">
            <Smartphone className="h-4 w-4 text-brand-neon" /> Receba tudo na hora no seu WhatsApp e
            e-mail
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-green-500">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div className="grid h-10 w-10 place-items-center rounded bg-white">
              <Mail className="h-5 w-5 text-red-500" />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <NeonCTA className="w-full max-w-md uppercase">Quero os Projetos Agora</NeonCTA>
          </div>
        </div>

        {/* Sale notification */}
        <div className="fixed bottom-4 left-4 z-50 hidden max-w-xs rounded-lg bg-white p-3 text-xs text-slate-900 shadow-xl sm:flex sm:items-center sm:gap-3">
          <div className="grid h-9 w-9 place-items-center rounded bg-green-100">
            <Check className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <div className="font-bold">Mateus D. garantiu os projetos</div>
            <div className="text-[10px] uppercase text-slate-500">Altamira PA · Há 3 min</div>
          </div>
        </div>
      </section>

      {/* RED PAIN SECTION */}
      <section className="bg-brand-red px-4 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl uppercase leading-tight sm:text-5xl">
            Você tem um sítio… mas ele não te dá{" "}
            <span className="bg-white px-3 text-brand-red">RETORNO</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base">
            Não é falta de vontade. É falta de um plano.{" "}
            <strong>Esse material resolve isso.</strong>
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm sm:text-base">
            {[
              "Áreas paradas sem gerar nada",
              "Dinheiro parado em terra sem produtividade",
              "Falta de organização e medo de investir errado",
            ].map((t) => (
              <li key={t} className="flex items-center justify-center gap-3">
                <X className="h-4 w-4 shrink-0" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <NeonCTA>
              QUERO TRANSFORMAR MINHA TERRA <ArrowRight className="h-4 w-4" />
            </NeonCTA>
          </div>
        </div>
      </section>

      {/* O QUE VAI MUDAR */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>
            O que vai mudar{" "}
            <span className="underline decoration-brand-neon decoration-4 underline-offset-8">
              na sua propriedade
            </span>
          </SectionTitle>
          <p className="mt-4 text-center italic text-slate-400">
            Chega de improvisar — aqui você executa com clareza
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: "PLANEJE COM VISÃO PROFISSIONAL",
                text: "Pare de tentar adivinhar o que fazer com seu terreno. Agora você segue projetos prontos com divisão estratégica.",
              },
              {
                icon: Check,
                title: "SAIBA ONDE COLOCAR CADA COISA",
                text: "Casa, cultivo, animais, irrigação… tudo já posicionado para melhor fluxo e aproveitamento.",
              },
              {
                icon: Zap,
                title: "PARE DE PERDER TEMPO",
                text: "Sem erro, sem tentativa, sem desperdício. Projetos com medidas reais para aplicação direta.",
              },
              {
                icon: Clock,
                title: "COMECE EM MINUTOS",
                text: "Abra o projeto e aplique direto no seu terreno. Receba tudo na hora no WhatsApp e e-mail.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-brand-card p-6 text-center"
              >
                <Icon className="mx-auto h-8 w-8 text-brand-neon" strokeWidth={2.5} />
                <h3 className="mt-4 font-display text-sm uppercase leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEM x COM PROJETOS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>
            Veja a diferença{" "}
            <span className="bg-brand-neon px-2 text-brand-bg">SEM OS PROJETOS</span> E{" "}
            <span className="bg-brand-neon px-2 text-brand-bg">COM OS PROJETOS</span>
          </SectionTitle>

          <div className="relative mt-10 overflow-hidden rounded-2xl">
            <img
              src={beforeAfter}
              alt="Comparação sem e com os projetos"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full"
            />
            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/70" />
            <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg">
              <ChevronLeft className="h-4 w-4 text-slate-900" />
              <ChevronRight className="absolute right-1 h-4 w-4 text-slate-900" />
            </div>
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900">
              <X className="h-4 w-4 text-red-500" /> SEM OS PROJETOS
            </span>
            <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900">
              <Check className="h-4 w-4 text-green-600" /> COM +100 PROJETOS
            </span>
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl bg-slate-100 p-6 text-slate-900 md:grid-cols-2">
            <div>
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-red ring-1 ring-brand-red/30">
                <X className="h-4 w-4" /> SEM OS PROJETOS
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  "Terra parada sem uso",
                  "Não sabe por onde começar",
                  "Mistura tudo sem organização",
                  "Depende de ideias soltas da internet",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-brand-red">
                    <X className="h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-brand-neon px-4 py-2 text-sm font-bold text-brand-bg">
                <Check className="h-4 w-4" /> COM OS PROJETOS
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  "Terreno dividido com estratégia",
                  "Cada área com função clara",
                  "Mais produtividade e renda",
                  "Planejamento profissional na mão",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 font-semibold text-emerald-700">
                    <Check className="h-4 w-4" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADO NA HORA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-neon ring-1 ring-brand-neon/30">
              <Target className="h-3.5 w-3.5" /> Resultado na Hora
            </span>
            <h2 className="mt-5 font-display text-3xl uppercase leading-tight sm:text-5xl">
              Você vai <span className="text-brand-neon">VER RESULTADO NA HORA</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Imagine olhar seu terreno e <strong>saber exatamente o que fazer</strong> em cada parte.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
            <img
              src={resultado}
              alt="Sítio produtivo organizado"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full rounded-2xl"
            />
            <ul className="space-y-4 text-sm sm:text-base">
              {[
                "Planeja tudo em poucos dias",
                "Organiza seu sítio com clareza",
                "Cria novas fontes de renda",
                "Para de depender de tentativa e erro",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 font-semibold">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-neon/20">
                    <Check className="h-4 w-4 text-brand-neon" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJETOS POR DENTRO */}
      <section className="bg-brand-bg-2 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>
            📖 Veja como são os{" "}
            <span className="bg-brand-neon px-2 text-brand-bg">PROJETOS POR DENTRO</span>
          </SectionTitle>
          <p className="mt-4 text-center text-slate-400">
            +100 plantas profissionais com medidas reais, prontas para aplicar.
          </p>

          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 [scrollbar-color:#c4ff2e_transparent]">
            {[project3, project1, project2, project1, project3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Projeto ${i + 1}`}
                loading="lazy"
                className="h-[420px] w-[280px] shrink-0 rounded-xl object-cover ring-1 ring-white/10"
              />
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL PARA VOCÊ */}
      <section className="bg-white px-4 py-20 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl uppercase leading-tight sm:text-5xl">
            Ideal para você <br /> que:
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Smartphone,
                title: "TEM SÍTIO OU TERRENO E QUER GERAR RENDA",
                text: "Você tem a terra, mas ela está parada ou subutilizada. Nossos projetos mostram como rentabilizar cada metro.",
              },
              {
                icon: Clock,
                title: "NÃO SABE COMO DIVIDIR A ÁREA",
                text: "Dúvida sobre onde plantar, onde criar animais ou onde construir? Os layouts resolvem a organização do espaço.",
              },
              {
                icon: Target,
                title: "QUER PARAR DE PERDER DINHEIRO",
                text: "Investir sem plano é prejuízo certo. Com medidas reais, você evita gastos desnecessários com erro de execução.",
              },
              {
                icon: MessageCircle,
                title: "QUER ALGO PRONTO E APLICÁVEL",
                text: "Sem teorias complexas. Você recebe a planta, pega a trena e começa a marcar seu novo sítio produtivo.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-blue-50 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 font-display text-sm uppercase leading-tight text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KIT INCLUSO */}
      <section id="comprar" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-neon px-5 py-2 text-xs font-bold uppercase text-brand-bg">
            <Check className="h-4 w-4" /> Tudo isso está incluso no seu kit
          </div>

          <div className="rounded-3xl bg-white p-8 text-slate-900 sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative">
                <span className="absolute -left-2 -top-2 z-10 rounded-md bg-brand-red px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                  ACESSO IMEDIATO
                </span>
                <img
                  src={kitMockup}
                  alt="Kit +100 Projetos"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div>
                <span className="inline-block rounded-md bg-brand-neon/30 px-3 py-1 text-xs font-bold text-emerald-700">
                  ITEM 01
                </span>
                <h3 className="mt-3 font-display text-3xl uppercase leading-tight sm:text-4xl">
                  Kit +100 Projetos de Sítio Produtivo
                </h3>
                <p className="mt-3 text-sm italic text-slate-600">
                  O guia prático para transformar sua terra em um negócio lucrativo.
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    ["Projetos com Medidas Reais", "Layout completo e estratégico do terreno"],
                    [
                      "Planos de Divisão por Produção",
                      "Para gado, hortas, pomares e agrofloresta",
                    ],
                    ["Plantas Prontas para Imprimir", "Leve para o campo e comece a executar"],
                    [
                      "Acesso Vitalício e Imediato",
                      "Compre uma vez e use para sempre em qualquer terreno",
                    ],
                    ["Atualizações Gratuitas", "Sempre novos modelos de projetos inclusos"],
                  ].map(([title, sub]) => (
                    <li key={title}>
                      <div className="flex items-center gap-2 font-bold text-slate-900">
                        <Check className="h-4 w-4 text-emerald-600" /> {title}
                      </div>
                      <p className="ml-6 text-xs text-slate-500">{sub}</p>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-center font-bold text-brand-red">
                  + 4 BÔNUS EXCLUSIVOS ABAIXO 👇
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>
            E NÃO PARA POR AÍ… <span className="text-brand-neon">TEM MAIS!</span>
          </SectionTitle>
          <p className="mt-3 text-center text-slate-400">Você também vai receber…</p>

          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-neon px-5 py-2 text-xs font-bold uppercase text-brand-bg">
              + 4 Bônus Exclusivos
            </span>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 1, img: bonus1, title: "PROJETOS DE CONSTRUÇÃO RURAL", text: "Plantas detalhadas para galpões, cercas e pequenas pontes para otimizar sua estrutura." },
              { n: 2, img: bonus2, title: "PLANILHA DE LUCRO POR ÁREA", text: "Ferramenta prática para calcular a viabilidade financeira de cada cultivo no seu terreno." },
              { n: 3, img: bonus3, title: "GUIA DE PLANTIO INTELIGENTE", text: "Técnicas de consórcio de culturas para maximizar a colheita em espaços reduzidos." },
              { n: 4, img: bonus4, title: "MANUAL DE ENERGIA RURAL", text: "Como implementar soluções simples de energia solar e biodigestores no seu sítio." },
            ].map(({ n, img, title, text }) => (
              <div
                key={n}
                className="overflow-hidden rounded-2xl bg-brand-card ring-1 ring-white/10"
              >
                <div className="relative bg-gradient-to-b from-slate-700 to-slate-900 p-4">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-neon px-3 py-1 text-[10px] font-bold uppercase text-brand-bg">
                    #{n} · Bônus Hoje!
                  </span>
                  <img
                    src={img}
                    alt={title}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="mx-auto h-64 w-auto object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm uppercase leading-tight">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <NeonCTA>QUERO O KIT + BÔNUS</NeonCTA>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-white px-4 py-16 text-slate-900">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 font-display text-white">
            <div className="text-center leading-none">
              <div className="text-2xl">7</div>
              <div className="text-[10px]">DIAS</div>
              <div className="text-[8px]">GARANTIA</div>
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg uppercase sm:text-xl">
              <ShieldCheck className="h-5 w-5 text-amber-500" /> Garantia Incondicional de 7 dias
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Se por qualquer motivo você não ficar satisfeito com o material, basta solicitar o
              reembolso em até 7 dias após a compra e devolveremos{" "}
              <strong>100% do seu investimento</strong>. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>
            QUEM JÁ USOU, <span className="bg-brand-neon px-2 text-brand-bg">APROVOU</span>
          </SectionTitle>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Anterior"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-neon text-brand-neon transition hover:bg-brand-neon hover:text-brand-bg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-sm rounded-[2.5rem] bg-brand-neon p-2 shadow-2xl">
              <div className="rounded-[2rem] bg-white p-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-xs text-slate-600">
                  <div className="h-8 w-8 rounded-full bg-emerald-500" />
                  <div>
                    <div className="font-bold text-slate-900">Zé Augusto - GO</div>
                    <div className="text-[10px] text-emerald-600">online</div>
                  </div>
                </div>
                <div className="mt-3 space-y-2 text-[11px] leading-relaxed text-slate-700">
                  <p className="rounded-lg bg-amber-50 p-2">
                    Boa noite, amigo. Tô passando pra te agradecer pelo material dos projetos.
                  </p>
                  <p className="rounded-lg bg-amber-50 p-2">
                    Eu tava com esse pedacinho de terra largado aqui no sítio e sem rumo. Depois que
                    olhei os projetos, ajeitei melhor o espaço e já fiz minha hortinha, um cercadinho
                    pras galinhas e comecei um pomarzinho.
                  </p>
                  <p className="rounded-lg bg-emerald-100 p-2 text-right">
                    Boa noite, Zé! Ficou bom demais 👏
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Próximo"
              className="grid h-10 w-10 place-items-center rounded-full border border-brand-neon text-brand-neon transition hover:bg-brand-neon hover:text-brand-bg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-neon" />
            <span className="h-2 w-2 rounded-full bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-slate-600" />
          </div>

          <div className="mt-12 flex justify-center">
            <NeonCTA>QUERO OS PROJETOS AGORA</NeonCTA>
          </div>
        </div>
      </section>

      {/* COMECE EM MINUTOS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>
            COMECE A ORGANIZAR{" "}
            <span className="bg-brand-neon px-2 text-brand-bg">EM MINUTOS</span>
          </SectionTitle>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 1, title: "ESCOLHA SEU PLANO", text: "Clique no botão e escolha o plano ideal para sua necessidade." },
              { n: 2, title: "RECEBA O ACESSO", text: "Em poucos segundos o material chega no seu WhatsApp e no seu e-mail." },
              { n: 3, title: "ABRA OS PROJETOS", text: "Acesse pelo celular, tablet ou se preferir pela tela do computador." },
              { n: 4, title: "APLIQUE NA TERRA", text: "Comece a organizar seu sítio e transformar sua terra em lucro." },
            ].map(({ n, title, text }) => (
              <div key={n} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-neon font-display text-xl text-brand-bg shadow-[0_8px_24px_-6px_#c4ff2e]">
                  {n}
                </div>
                <h3 className="mt-5 font-display text-sm uppercase leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <NeonCTA>QUERO MEU ACESSO AGORA</NeonCTA>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="planos" className="bg-white px-4 py-20 text-slate-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl uppercase leading-tight sm:text-5xl">
            ESCOLHA SEU PLANO E <span className="text-emerald-500">COMECE AGORA</span>
          </h2>

          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-brand-red">
              <Clock className="h-3.5 w-3.5" /> OFERTA DISPONÍVEL SOMENTE HOJE, 30/06/2026
            </span>
          </div>

          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            {/* Plano Básico */}
            <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200 shadow-sm">
              <h3 className="text-center font-display text-2xl uppercase">PLANO BÁSICO</h3>
              <img src={kitMockup} alt="Plano Básico" className="mx-auto my-6 h-44 w-auto object-contain" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> +100 Projetos de Sítio Produtivo</li>
                <li className="flex items-center gap-2 text-slate-400 line-through"><X className="h-4 w-4" /> Sem os 4 Bônus Exclusivos</li>
              </ul>
              <div className="mt-8 text-center">
                <p className="text-xs text-slate-500 line-through">de R$97,00 por:</p>
                <p className="font-display text-4xl text-slate-900">R$9,90</p>
                <p className="text-xs text-slate-500">pagamento único</p>
              </div>
              <a
                href={CTA_URL}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-neon py-4 font-display text-sm uppercase text-brand-bg transition hover:scale-[1.02]"
              >
                QUERO O BÁSICO <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Plano Completo */}
            <div className="relative rounded-3xl bg-lime-50 p-8 ring-2 ring-brand-neon shadow-xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-bg px-4 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-neon">
                Mais Vendido · Plano Completo
              </span>
              <h3 className="text-center font-display text-2xl uppercase">PLANO COMPLETO</h3>
              <img src={kitMockup} alt="Plano Completo" className="mx-auto my-6 h-44 w-auto object-contain" />
              <div className="mb-4 rounded-xl bg-brand-bg py-2 text-center font-display text-xs uppercase text-white">
                Todos os Bônus Inclusos
              </div>
              <ul className="space-y-2.5 text-sm">
                {[
                  "+100 Projetos de Sítio Produtivo",
                  "Bônus #1: Construção Rural",
                  "Bônus #2: Planilha de Lucros",
                  "Bônus #3: Guia de Plantio Inteligente",
                  "Bônus #4: Manual de Energia Rural",
                  "Acesso Vitalício",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500 line-through">de R$197,00 por:</p>
                <p className="font-display text-5xl text-slate-900">R$27,00</p>
                <p className="mt-1 text-[11px] font-bold uppercase text-slate-600">Melhor opção — Completo</p>
              </div>
              <a
                href={CTA_URL}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-neon py-4 font-display text-sm uppercase text-brand-bg shadow-[0_10px_30px_-8px_#c4ff2e] transition hover:scale-[1.02]"
              >
                QUERO ADQUIRIR O MEU <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-center text-xs font-bold text-brand-red">
                🔥 APROVEITE AGORA: VOCÊ NÃO VAI ENCONTRAR ESSE PREÇO DEPOIS!
              </p>
              <p className="mt-1 text-center text-[10px] text-slate-500">7 dias de garantia incondicional</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-20 text-slate-900">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl uppercase leading-tight sm:text-5xl">
            PERGUNTAS <span className="bg-brand-neon px-2">FREQUENTES</span>
          </h2>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {[
              { q: "O que vem incluso no pacote?", a: "Você recebe os +100 projetos completos de sítios produtivos com medidas reais e, no Plano Completo, os 4 bônus exclusivos." },
              { q: "Como vou ter acesso ao material?", a: "Após a compra, você recebe o acesso imediato no seu e-mail e também no WhatsApp cadastrado." },
              { q: "O material é digital ou físico?", a: "100% digital. Você pode acessar pelo celular, tablet ou computador, e imprimir se quiser." },
              { q: "Para quem é indicado esse material?", a: "Para qualquer pessoa que tenha sítio, chácara ou terreno e queira organizar e gerar renda com a terra." },
              { q: "Preciso de conhecimento prévio para usar?", a: "Não. Os projetos foram feitos para qualquer pessoa aplicar, mesmo sem experiência técnica." },
              { q: "Funciona para quem tem pouco espaço?", a: "Sim! Há projetos para áreas pequenas, médias e grandes." },
              { q: "Qual a diferença entre o Plano Básico e o Completo?", a: "O Básico inclui apenas os projetos. O Completo inclui projetos + os 4 bônus exclusivos." },
              { q: "Vou precisar investir muito dinheiro para aplicar?", a: "Não. Os projetos são pensados para começar pequeno, com baixo investimento e ir escalando." },
              { q: "E se eu não gostar do material?", a: "Você tem 7 dias de garantia incondicional. Pediu reembolso, devolvemos 100% do valor." },
            ].map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-slate-900">
                  {item.q}
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white px-4 py-12 text-center text-slate-700">
        <div className="font-display text-xl italic">SÍTIO PRODUTIVO PRIME</div>
        <p className="mt-6 text-[11px] uppercase tracking-wider text-slate-400">
          © {new Date().getFullYear()} Sítio Produtivo Prime. Todos os direitos reservados.
        </p>
        <div className="mt-3 flex justify-center gap-4 text-[11px] text-slate-500">
          <a href="#" className="hover:underline">TERMOS DE USO</a>
          <a href="#" className="hover:underline">POLÍTICAS DE PRIVACIDADE</a>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-[10px] text-brand-red">
          Este site não é afiliado ao Meta, Facebook ou Instagram. Depois que você sair do Instagram
          ou Facebook, a responsabilidade não é deles e sim do nosso site. Trabalhamos para que você
          tenha a melhor experiência possível.
        </p>
      </footer>
    </div>
  );
}
