import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  GraduationCap,
  LogIn,
  MessageCircle,
  Pencil,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import classroom from "@/assets/classroom.jpg.asset.json";
import library from "@/assets/library.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEA — Sistema Educacional Avançado" },
      {
        name: "description",
        content: "Atividades com IA, acompanhamento de desempenho e recursos para alunos, professores e administração.",
      },
      { property: "og:title", content: "SEA — Sistema Educacional Avançado" },
      {
        property: "og:description",
        content: "Ensino, aprendizagem e gestão escolar em uma única plataforma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: BrainCircuit,
    title: "Atividades com IA",
    text: "Professores criam questões por áudio ou texto e publicam para suas turmas.",
  },
  {
    icon: MessageCircle,
    title: "Chat de dúvidas",
    text: "Um espaço dedicado para os alunos esclarecerem dúvidas durante os estudos.",
  },
  {
    icon: Trophy,
    title: "Pontos e conquistas",
    text: "O progresso nas atividades se transforma em pontuação, medalhas e histórico.",
  },
  {
    icon: BarChart3,
    title: "Desempenho e gestão",
    text: "Relatórios por turma e gerenciamento de alunos, professores e atividades.",
  },
];

const profiles = [
  {
    icon: BookOpen,
    title: "Para alunos",
    text: "Atividades, histórico, dúvidas e conquistas.",
    detail: "Resolva atividades da sua turma, consulte seu histórico e acompanhe os pontos e badges conquistados.",
  },
  {
    icon: BrainCircuit,
    title: "Para professores",
    text: "Criação com IA e relatórios.",
    detail: "Crie atividades por áudio ou texto, publique para suas turmas e acompanhe respostas e desempenho.",
  },
  {
    icon: ShieldCheck,
    title: "Para administração",
    text: "Gestão de pessoas e turmas.",
    detail: "Gerencie alunos e professores, organize vínculos com turmas e acompanhe indicadores da plataforma.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-elegant transition-transform hover:rotate-6">
              <GraduationCap className="size-6" />
            </span>
            <span className="font-display text-xl font-bold text-foreground">SEA</span>
          </Link>

          <div className="relative shrink-0">
            <span className="pointer-events-none absolute -inset-1 animate-pulse-ring rounded-full bg-primary/55 blur-md" aria-hidden />
            <Button asChild size="lg" className="group relative z-10 rounded-full bg-brand-gradient px-6 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-elegant transition-transform hover:scale-105 sm:px-8 sm:text-base">
              <Link to="/login">
                <LogIn className="size-5" />
                Entrar
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 overflow-x-clip px-6 pb-20 pt-8 lg:grid-cols-2">
          <div className="pointer-events-none absolute -left-32 top-0 size-96 animate-blob rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-40 size-80 animate-blob rounded-full bg-brand-orange/25 blur-3xl [animation-delay:-5s]" />
          <div className="relative animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <Pencil className="size-4" /> Tecnologia que acompanha o aprendizado
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
              Ensinar, aprender e evoluir{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">no mesmo lugar</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              O Sistema Educacional Avançado reúne atividades criadas com IA, acompanhamento de desempenho e recursos de estudo para toda a comunidade escolar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-brand-gradient px-8 shadow-elegant transition-transform hover:scale-105">
                <Link to="/login">Acessar o SEA <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <a href="#recursos">Conhecer recursos</a>
              </Button>
            </div>
            <div className="mt-10 grid gap-5 border-t border-border pt-6 sm:grid-cols-3">
              {profiles.map((profile) => (
                <div key={profile.title}>
                  <div className="flex items-center gap-2 font-display text-sm font-bold text-primary">
                    <profile.icon className="size-4" /> {profile.title}
                  </div>
                  <div className="mt-1 text-sm leading-5 text-muted-foreground">{profile.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <img
              src={classroom.url}
              alt="Alunos estudando em sala de aula"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-elegant animate-float sm:-left-8">
              <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground"><Trophy className="size-5" /></span>
              <div>
                <div className="text-sm font-semibold text-card-foreground">Seu progresso</div>
                <div className="text-xs text-muted-foreground">Pontos e conquistas</div>
              </div>
            </div>
            <div className="absolute -right-2 -top-6 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-elegant animate-float [animation-delay:-3s] sm:-right-6">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><BrainCircuit className="size-5" /></span>
              <div>
                <div className="text-sm font-semibold text-card-foreground">Atividades com IA</div>
                <div className="text-xs text-muted-foreground">Criadas por áudio ou texto</div>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="bg-muted/60 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">O que já faz parte do SEA</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Recursos pensados para o dia a dia de quem ensina, aprende e administra.</p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="group animate-fade-up rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-elegant"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-brand-gradient text-primary-foreground transition-transform group-hover:rotate-6">
                    <feature.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <img
            src={library.url}
            alt="Estudantes na biblioteca"
            width={1024}
            height={1536}
            loading="lazy"
            className="mx-auto aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-elegant"
          />
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><Users className="size-4" /> Uma plataforma, três experiências</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Um painel para cada rotina</h2>
            <div className="mt-8 space-y-6">
              {profiles.map((profile) => (
                <div key={profile.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <profile.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{profile.title}</h3>
                    <p className="mt-1 leading-6 text-muted-foreground">{profile.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-9 rounded-full px-8">
              <Link to="/login">Acessar meu painel <ArrowRight /></Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-brand-gradient py-8 text-center text-sm text-primary-foreground">
        © 2026 SEA — Sistema Educacional Avançado
      </footer>

      <FloatingEnter />
    </div>
  );
}

function FloatingEnter() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-5 z-50 sm:inset-x-auto sm:bottom-8 sm:right-8 sm:w-auto">
      <Button asChild size="lg" className="w-full animate-fade-up justify-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-elegant transition-transform hover:scale-105 sm:w-auto sm:px-6 sm:py-3 sm:text-sm">
        <Link to="/login">
          <LogIn className="size-5" />
          Entrar
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
