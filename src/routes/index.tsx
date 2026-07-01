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
  Sparkles,
  Instagram,
} from "lucide-react";
import beforeAfter from "@/assets/before-after.jpg";
import resultado from "@/assets/resultado.jpg";
import kitMockup from "@/assets/kit-mockup.png";
const bonus1 = "https://www.image2url.com/r2/default/images/1782875887848-660ae212-fba5-4775-a685-303df39ba460.png";
const bonus2 = "https://www.image2url.com/r2/default/images/1782875989902-a913e28e-2c01-429c-997c-a56f11b63560.png";
const bonus3 = "https://www.image2url.com/r2/default/images/1782876029236-fb9204f7-a5ee-4aff-b279-633f92f0640c.png";
const bonus4 = "https://www.image2url.com/r2/default/images/1782876162413-78aa6ea1-66fb-4a5f-ab4e-832da089c294.png";
const bonus5 = "https://www.image2url.com/r2/default/images/1782876238352-3bb5855b-9042-4eb4-a7e1-02207dc04a29.png";
const bonus6 = "https://www.image2url.com/r2/default/images/1782876488561-f37692f5-6ba3-4736-bda8-b0ed049f92ed.png";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import heroMockupAsset from "@/assets/hero-mockup.webp.asset.json";
const heroMockup = heroMockupAsset.url;
import amostra01 from "@/assets/amostras/amostra-01.png.asset.json";
import amostra02 from "@/assets/amostras/amostra-02.png.asset.json";
import amostra03 from "@/assets/amostras/amostra-03.png.asset.json";
import amostra04 from "@/assets/amostras/amostra-04.png.asset.json";
import amostra05 from "@/assets/amostras/amostra-05.png.asset.json";
import amostra06 from "@/assets/amostras/amostra-06.png.asset.json";
import amostra07 from "@/assets/amostras/amostra-07.png.asset.json";
import amostra08 from "@/assets/amostras/amostra-08.png.asset.json";
import amostra09 from "@/assets/amostras/amostra-09.png.asset.json";
import amostra10 from "@/assets/amostras/amostra-10.png.asset.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

function CountdownCompleto() {
  const [ms, setMs] = useState<number>(24 * 60 * 60 * 1000);
  useEffect(() => {
    const KEY = "plano_completo_deadline";
    let deadline = Number(localStorage.getItem(KEY) || 0);
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => setMs(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const Box = ({ v, l }: { v: string; l: string }) => (
    <div className="flex flex-col items-center rounded-lg bg-brand-bg px-3 py-2 min-w-[58px]">
      <span className="font-display text-2xl leading-none text-brand-neon tabular-nums">{v}</span>
      <span className="mt-1 text-[9px] font-bold uppercase tracking-wider text-white/70">{l}</span>
    </div>
  );
  return (
    <div className="mt-4 rounded-xl border-2 border-brand-red/40 bg-white/60 p-3">
      <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-wider text-brand-red">
        ⏰ Oferta expira em:
      </p>
      <div className="flex items-center justify-center gap-2">
        <Box v={h} l="Horas" />
        <span className="font-display text-2xl text-brand-bg">:</span>
        <Box v={m} l="Min" />
        <span className="font-display text-2xl text-brand-bg">:</span>
        <Box v={s} l="Seg" />
      </div>
    </div>
  );
}

const amostras = [
  amostra01, amostra02, amostra03, amostra04, amostra05,
  amostra06, amostra07, amostra08, amostra09, amostra10,
].map((a) => a.url);

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
      className={`neon-cta group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-neon px-8 py-4 text-center font-display text-sm tracking-wide text-brand-bg shadow-[0_10px_40px_-10px_#c4ff2e] transition-transform hover:scale-[1.04] active:scale-95 sm:text-base ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="neon-cta__shine" />
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

function ProjetosCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[autoplay.current]}
      className="mx-auto w-full max-w-5xl px-8 sm:px-12"
    >
      <CarouselContent>
        {amostras.map((src, i) => (
          <CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-1/3">
            <img
              src={src}
              alt={`Amostra ${i + 1}`}
              loading="lazy"
              className="mx-auto h-auto w-full rounded-xl object-contain ring-1 ring-black/10"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-brand-neon/40 bg-brand-neon text-brand-bg hover:bg-brand-neon-2" />
      <CarouselNext className="right-0 border-brand-neon/40 bg-brand-neon text-brand-bg hover:bg-brand-neon-2" />
    </Carousel>
  );
}

const depoimentos = [
  "https://www.image2url.com/r2/default/images/1777691489540-4926818b-d1db-4555-9b0e-718560dcd623.blob",
  "https://www.image2url.com/r2/default/images/1777691532042-58e8f315-ef7d-4a37-aac5-b438cf83b1eb.blob",
  "https://www.image2url.com/r2/default/images/1777782633042-fb94fc07-698d-4726-8b93-3c4921df8fd1.blob",
  "https://www.image2url.com/r2/default/images/1777738144202-1c5f5c59-9222-4ddb-9aed-e54d7498b57b.blob",
];

function DepoimentosCarousel() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));
  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[autoplay.current]}
      className="mx-auto w-full max-w-3xl px-8 sm:px-12"
    >
      <CarouselContent>
        {depoimentos.map((src, i) => (
          <CarouselItem key={i} className="basis-full">
            <img
              src={src}
              alt={`Depoimento ${i + 1}`}
              loading="lazy"
              className="mx-auto h-auto w-auto max-w-full object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-brand-neon/40 bg-brand-neon text-brand-bg hover:bg-brand-neon-2" />
      <CarouselNext className="right-0 border-brand-neon/40 bg-brand-neon text-brand-bg hover:bg-brand-neon-2" />
    </Carousel>
  );
}



function UpsellModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [left, setLeft] = useState(15 * 60);
  useEffect(() => {
    if (!open) return;
    setLeft(15 * 60);
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [open]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#0b0b14] p-8 text-white ring-1 ring-amber-400/40 shadow-[0_0_60px_-10px_rgba(251,191,36,0.5)]">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10 ring-1 ring-amber-400/40">
          <Sparkles className="h-6 w-6 text-amber-400" />
        </div>

        <h3 className="text-center font-display text-2xl uppercase tracking-wide">
          E<span className="text-amber-400">$</span>PERE! <span className="text-amber-400">OFERTA ÚNICA</span>
        </h3>
        <p className="mt-3 text-center text-sm text-slate-300">
          Por que levar apenas o básico se você pode ter o{" "}
          <span className="font-bold text-amber-400">Plano Completo</span>
          <br />por um valor simbólico de upgrade?
        </p>

        <div className="mt-5 flex items-center justify-center gap-3 rounded-xl border border-amber-400/30 bg-amber-400/5 py-3 text-sm">
          <Clock className="h-4 w-4 text-amber-400" />
          <span className="uppercase tracking-wide text-slate-300">A oferta expira em:</span>
          <span className="font-mono text-lg font-bold text-amber-400">{mm}:{ss}</span>
        </div>

        <p className="mt-4 text-center text-xs italic text-slate-400">
          O Plano Completo (Regular: R$ 27,90) é a escolha de 92% das pessoas.
          Aproveite o desconto de upgrade agora!
        </p>

        <ul className="mt-5 space-y-2.5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" /> <span className="font-semibold">Tudo do Plano Básico</span></li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" /> <span className="font-semibold">6 BÔNUS INCLUSOS</span> <span className="text-sm text-slate-400">(Pack Rural, ROI, Irrigação e +)</span></li>
          <li className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" /> <span className="font-semibold">Suporte prioritário via WhatsApp</span></li>
        </ul>

        <div className="mt-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Upgrade do Plano Completo:</p>
          <p className="mt-1 text-sm text-slate-400 line-through">De R$ 27,90</p>
          <p className="font-display text-xl uppercase tracking-wide text-slate-200">
            Por apenas R$ <span className="text-5xl text-amber-400">19</span>,90
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-amber-400">
            Economia de R$ 8,00 extra hoje!
          </p>
        </div>

        <a
          href="https://pay.wiapy.com/MowpM6rdLB"
          className="soft-pulse mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 py-4 font-display text-sm uppercase text-black shadow-[0_10px_30px_-8px_rgba(251,191,36,0.6)] transition hover:scale-[1.02]"
        >
          QUERO O PLANO COMPLETO POR R$ 19,90
        </a>

        <a
          href="https://pay.wiapy.com/rtXyisd1bF"
          className="mt-4 block w-full text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400 underline underline-offset-4 hover:text-white"
        >
          Não, obrigado. Prefiro o Plano Básico de R$ 9,90
        </a>
      </div>
    </div>
  );
}

function useTomorrowDate() {
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toLocaleDateString("pt-BR");
  });
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      d.setDate(d.getDate() + 1);
      setDate(d.toLocaleDateString("pt-BR"));
    };
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return date;
}

function Index() {
  const [upsellOpen, setUpsellOpen] = useState(false);
  const tomorrow = useTomorrowDate();
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-white antialiased">
      {/* Top urgency bar */}
      <div className="sticky top-0 z-50 flex items-center justify-center gap-2 bg-brand-red px-4 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
        <Clock className="h-4 w-4" />
        OFERTA DISPONÍVEL ATÉ O DIA, {tomorrow}
      </div>


      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl leading-tight text-white sm:text-5xl md:text-6xl">
            +100 Projetos de Sítios e Chácaras Produtivas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-2xl font-light uppercase leading-tight text-brand-neon underline decoration-brand-neon decoration-1 underline-offset-8 sm:text-4xl">
            que transforma sua terra parada em fonte de renda
          </p>

          {/* Hero mockup */}
          <div className="relative mx-auto mt-10 w-full max-w-2xl">
            <div className="hero-mockup-glow pointer-events-none absolute inset-0 -z-10 blur-2xl" />
            <img
              src={heroMockup}
              alt="Mockup do kit +100 Projetos de Sítios e Chácaras Produtivas"
              className="hero-mockup-float h-auto w-full"
              loading="eager"
            />
          </div>

          <p className="mx-auto mt-8 max-w-xl text-base text-slate-300 sm:text-lg">
            A maior biblioteca de plantas de sítios do Brasil com{" "}
            <strong className="text-white">+100 projetos profissionais</strong> com medidas reais,
            divisões estratégicas e layouts prontos para executar, mesmo que você nunca tenha
            planejado nada rural na vida.
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
            <NeonCTA>QUERO MEU PROJETO POR R$ 9,90</NeonCTA>
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

      {/* PROJETOS POR DENTRO */}
      <section className="bg-white px-4 py-20 text-black">
        <div className="mx-auto max-w-6xl">
          <SectionTitle className="!text-black">
            📖 Veja como são os{" "}
            <span className="bg-brand-neon px-2 text-brand-bg">PROJETOS POR DENTRO</span>
          </SectionTitle>
          <p className="mt-4 text-center text-slate-600">
            +100 plantas profissionais com medidas reais, prontas para aplicar.
          </p>


          <div className="mt-12">
            <ProjetosCarousel />
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
                  src={heroMockup}
                  alt="Kit +100 Projetos"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="hero-mockup-float w-full"
                />
              </div>
              <div>
                <span className="inline-block rounded-md bg-brand-neon/30 px-3 py-1 text-xs font-bold text-emerald-700">
                  ITEM 01
                </span>
                <h3 className="mt-3 font-display text-3xl uppercase leading-tight sm:text-4xl">
                  +100 Projetos de Sítios e Chácaras Produtivas
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
                    ["Plantas Prontas para Aplicar", "Leve para o campo e comece a executar"],
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
                  + 6 BÔNUS EXCLUSIVOS ABAIXO 👇
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
              + 6 Bônus Exclusivos
            </span>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 1, img: bonus1, title: "Pack de Construções Rurais", text: "Plantas detalhadas para galpões, cercas e pequenas pontes para otimizar sua estrutura." },
              { n: 2, img: bonus2, title: "Planilha de ROI Produtivo", text: "Ferramenta prática para calcular a viabilidade financeira de cada cultivo no seu terreno." },
              { n: 3, img: bonus3, title: "Guia de Plantas Companheiras", text: "Técnicas de consórcio de culturas para maximizar a colheita em espaços reduzidos." },
              { n: 4, img: bonus4, title: "Manual de Energia Solar Rural", text: "Como implementar soluções simples de energia solar e biodigestores no seu sítio." },
              { n: 5, img: bonus5, title: "Manual de Criação de Animais", text: "Dimensione sistemas solares para casas rurais, poços artesianos e irrigação. Cálculos passo a passo." },
              { n: 6, img: bonus6, title: "Manual de Criação de Animais", text: "Galinhas, cabras, porcos e peixes: o guia completo de manejo para criar com segurança e gerar renda." },
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
                    className="hero-mockup-float mx-auto h-64 w-auto object-contain"
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
            <NeonCTA>QUERO MEU PROJETO POR R$ 9,90</NeonCTA>
          </div>
        </div>
      </section>


      {/* DEPOIMENTOS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>
            QUEM JÁ USOU, <span className="bg-brand-neon px-2 text-brand-bg">APROVOU</span>
          </SectionTitle>

          <div className="mt-12">
            <DepoimentosCarousel />
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
              <Clock className="h-3.5 w-3.5" /> OFERTA DISPONÍVEL SOMENTE HOJE, {(() => { const d = new Date(); d.setDate(d.getDate() + 1); return d.toLocaleDateString("pt-BR"); })()}
            </span>
          </div>

          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            {/* Plano Básico */}
            <div className="card-border-light rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-center font-display text-2xl uppercase">PLANO BÁSICO</h3>
              <img src="https://www.image2url.com/r2/default/images/1782875177060-724e08a3-5aa9-4686-9d30-5050877c3ca7.webp" alt="Plano Básico" className="hero-mockup-float mx-auto my-3 h-72 md:h-80 w-auto object-contain" />
              <ul className="space-y-1.5 text-[15px]">
                <li className="flex items-center gap-2 font-semibold text-slate-900"><Check className="h-4 w-4 text-emerald-600" /> +100 projetos completos</li>
                <li className="flex items-center gap-2 font-semibold text-slate-900"><Check className="h-4 w-4 text-emerald-600" /> Acesso imediato após compra</li>
                <li className="flex items-center gap-2 font-semibold text-slate-900"><Check className="h-4 w-4 text-emerald-600" /> Garantia de 7 dias</li>
                <li className="flex items-center gap-2 text-slate-400 line-through"><X className="h-4 w-4" /> Sem os 6 Bônus Exclusivos</li>
              </ul>
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 line-through">de R$97,00 por:</p>
                <p className="font-display text-4xl text-slate-900">R$9,90</p>
                <p className="text-xs text-slate-500">pagamento único</p>
              </div>
              <button
                type="button"
                onClick={() => setUpsellOpen(true)}
                className="soft-pulse mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white py-3 font-display text-sm uppercase text-slate-600 transition hover:bg-slate-50"
              >
                QUERO O BÁSICO <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Plano Completo */}
            <div className="relative rounded-3xl bg-lime-50 p-5 ring-2 ring-brand-neon shadow-xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-bg px-4 py-1 text-[8px] font-bold uppercase tracking-wide text-brand-neon">
                Mais Vendido · Plano Completo
              </span>
              <h3 className="text-center font-display text-2xl uppercase">PLANO COMPLETO</h3>
              <CountdownCompleto />
              <div className="mt-2 text-center">
                <p className="text-xs text-slate-500 line-through">de R$197,00 por:</p>
                <p className="font-display text-5xl text-slate-900">R$27,90</p>
                <p className="mt-1 text-[11px] font-bold uppercase text-slate-600">Melhor opção — Completo</p>
              </div>
              <img src={heroMockup} alt="Plano Completo" className="hero-mockup-float mx-auto my-3 h-72 md:h-80 w-auto object-contain" />
              <div className="mb-3 rounded-xl bg-brand-bg py-2 text-center font-display text-xs uppercase text-white">
                Todos os Bônus Inclusos
              </div>
              <ul className="space-y-1.5 text-[15px]">
                {[
                  "Tudo do Plano Básico",
                  "BÔNUS 1: Construções Rurais",
                  "BÔNUS 2: Planilha ROI Editável",
                  "BÔNUS 3: Plantas Companheiras",
                  "BÔNUS 4: Energia Solar Rural",
                  "BÔNUS 5: Criação de Animais",
                  "BÔNUS 6: Água e Irrigação Rural",
                  "Atualizações gratuitas semanal",
                  "Acesso prioritário a novos projetos",
                  "Suporte prioritário via WhatsApp",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 font-semibold text-slate-900">
                    <Check className="h-4 w-4 text-emerald-600" /> {t}
                  </li>
                ))}
              </ul>

              <a
                href="https://pay.wiapy.com/sOZisMvvt9"
                className="soft-pulse mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand-neon py-3 font-display text-sm uppercase text-brand-bg shadow-[0_10px_30px_-8px_#c4ff2e] transition hover:scale-[1.02]"
              >
                QUERO ADQUIRIR O MEU <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-xs font-bold text-brand-red">
                🔥 APROVEITE AGORA: VOCÊ NÃO VAI ENCONTRAR ESSE PREÇO DEPOIS!
              </p>
              <p className="mt-1 text-center text-[10px] text-slate-500">7 dias de garantia incondicional</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-brand-bg px-4 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-card px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-neon ring-1 ring-brand-neon/30">
            <ChevronLeft className="h-3 w-3" /> ACOMPANHE DE PERTO
          </span>

          <h2
            className="mt-6 text-3xl italic leading-tight sm:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos siga no Instagram e veja o{" "}
            <span className="text-amber-400">Rural Planner em ação</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm italic text-slate-300">
            Dicas de planejamento rural, projetos reais e conteúdo exclusivo toda semana. Ficou com dúvida? É só chamar por lá.
          </p>

          {/* Instagram profile card */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-brand-card ring-1 ring-white/10 shadow-2xl">
            <div className="p-6 sm:p-8">
              {/* Avatar + username */}
              <div className="flex flex-col items-center">
                <div className="relative h-24 w-24 rounded-full p-1 ring-2 ring-brand-neon">
                  <img
                    src="https://www.image2url.com/r2/default/images/1782914645493-b8502992-e7a6-4f47-bf03-1da828a4648c.jpeg"
                    alt="Rural Planner"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl text-white">Rural Planner</h3>
                <p className="text-sm text-slate-400">@ruralplanner.oficial</p>
              </div>

              {/* Bio */}
              <div className="mt-4 space-y-1 text-center text-xs text-slate-300">
                <p>✅ Planejamento rural do jeito certo</p>
                <p>🌳 +100 projetos profissionais de sítios</p>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 border-y border-white/10 py-4">
                <div className="text-center">
                  <p className="font-display text-lg text-amber-400">+100</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Projetos</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-lg text-amber-400">12 mil</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Produtores</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-lg text-amber-400">15+</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">Anos Exp.</p>
                </div>
              </div>

              {/* Preview grid */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                <img
                  src="https://www.image2url.com/r2/default/images/1782915535006-bac19f08-210a-42fd-82f6-2b74188a5291.jpeg"
                  alt="Preview Instagram 1"
                  loading="lazy"
                  className="aspect-square w-full rounded-lg object-cover"
                />
                <img
                  src="https://www.image2url.com/r2/default/images/1782915588617-5d0ca3b5-115f-4877-b267-d8e7c2e68775.jpeg"
                  alt="Preview Instagram 2"
                  loading="lazy"
                  className="aspect-square w-full rounded-lg object-cover"
                />
                <img
                  src="https://www.image2url.com/r2/default/images/1782915712991-6f947836-387f-4541-b291-06f0cddc7f13.jpeg"
                  alt="Preview Instagram 3"
                  loading="lazy"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>

              {/* CTA */}
              <a
                href="https://www.instagram.com/ruralplanner.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-brand-neon py-3.5 font-display text-xs uppercase tracking-wide text-black transition hover:scale-[1.02]"
              >
                <Instagram className="h-4 w-4" />
                Ver @ruralplanner.oficial no Instagram
              </a>

              <p className="mt-3 text-center text-[10px] text-slate-400">
                Ficou com dúvida? Fale com a gente direto no perfil ✓
              </p>
            </div>
          </div>

          <p className="mt-10 text-[10px] uppercase tracking-widest text-slate-500">
            Conteúdo novo toda semana • Dicas reais de planejamento rural • Sem enrolação
          </p>
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
              { q: "O que vem incluso no pacote?", a: "Você recebe os +100 projetos completos de sítios produtivos com medidas reais e, no Plano Completo, os 6 bônus exclusivos." },
              { q: "Como vou ter acesso ao material?", a: "Após a compra, você recebe o acesso imediato no seu e-mail e também no WhatsApp cadastrado." },
              { q: "O material é digital ou físico?", a: "100% digital. Você pode acessar pelo celular, tablet ou computador, e imprimir se quiser." },
              { q: "Para quem é indicado esse material?", a: "Para qualquer pessoa que tenha sítio, chácara ou terreno e queira organizar e gerar renda com a terra." },
              { q: "Preciso de conhecimento prévio para usar?", a: "Não. Os projetos foram feitos para qualquer pessoa aplicar, mesmo sem experiência técnica." },
              { q: "Funciona para quem tem pouco espaço?", a: "Sim! Há projetos para áreas pequenas, médias e grandes." },
              { q: "Qual a diferença entre o Plano Básico e o Completo?", a: "O Básico inclui apenas os projetos. O Completo inclui projetos + os 6 bônus exclusivos." },
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


      {/* FOOTER */}
      <footer className="bg-white px-4 py-12 text-center text-slate-700">
        <div className="font-display text-xl italic">RURAL PLANNER</div>
        <p className="mt-6 text-[11px] uppercase tracking-wider text-slate-400">
          © {new Date().getFullYear()} Rural Planner. Todos os direitos reservados.
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

      <UpsellModal open={upsellOpen} onClose={() => setUpsellOpen(false)} />

    </div>
  );
}
