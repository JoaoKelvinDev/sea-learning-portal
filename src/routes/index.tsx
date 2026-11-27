import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, GraduationCap, CalendarDays, BarChart3, Users, Pencil, Calculator, Microscope, ArrowRight } from "lucide-react";
import classroom from "@/assets/classroom.jpg.asset.json";
import library from "@/assets/library.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SEA — Sistema Educacional Avançado" },
      { name: "description", content: "Notas, frequência, agenda e comunicação escolar em um só lugar." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: BarChart3, title: "Notas e boletins", text: "Acompanhe o desempenho de cada disciplina em tempo real." },
  { icon: CalendarDays, title: "Agenda escolar", text: "Provas, trabalhos e eventos organizados num só calendário." },
  { icon: BookOpen, title: "Material de estudo", text: "Conteúdos e atividades disponibilizados pelos professores." },
  { icon: Users, title: "Família conectada", text: "Responsáveis informados sobre frequência e avisos." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="grid size-10 place-items-center rounded-xl bg-brand-gradient text-primary-foreground shadow-elegant">
            <GraduationCap className="size-5" />
          </span>
          <span className="font-display text-xl font-bold text-foreground">SEA</span>
        </div>
        <Button asChild className="rounded-full px-6">
          <Link to="/login">Entrar</Link>
        </Button>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-2">
        <div className="pointer-events-none absolute -left-32 top-0 size-96 animate-blob rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-40 size-80 animate-blob rounded-full bg-brand-orange/25 blur-3xl [animation-delay:-5s]" />
        <div className="relative animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            <Pencil className="size-4" /> Ano letivo 2026 em andamento
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
            Aprender fica mais fácil quando tudo está{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">no mesmo lugar</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            O Sistema Educacional Avançado reúne notas, frequência, agenda e materiais para alunos, professores e famílias.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-brand-gradient px-8 shadow-elegant transition-transform hover:scale-105">
              <Link to="/login">Acessar o SEA <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <a href="#recursos">Conhecer recursos</a>
            </Button>
          </div>
          <div className="mt-10 flex gap-8">
            {[["1.200+", "alunos"], ["85", "professores"], ["98%", "satisfação"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-primary">{n}</div>
                <div className="text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <img src={classroom.url} alt="Alunos estudando em sala de aula" width={1536} height={1024}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant" />
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-elegant animate-float sm:-left-8">
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground"><Calculator className="size-5" /></span>
            <div><div className="text-sm font-semibold text-card-foreground">Matemática</div><div className="text-xs text-muted-foreground">Nota 9,5 ⭐</div></div>
          </div>
          <div className="absolute -right-2 -top-6 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-elegant animate-float [animation-delay:-3s] sm:-right-6">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Microscope className="size-5" /></span>
            <div><div className="text-sm font-semibold text-card-foreground">Feira de Ciências</div><div className="text-xs text-muted-foreground">Sexta, 14h</div></div>
          </div>
        </div>
      </section>

      <section id="recursos" className="bg-muted/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">Tudo o que a escola precisa</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Ferramentas pensadas para o dia a dia de quem ensina e de quem aprende.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} style={{ animationDelay: `${i * 120}ms` }}
                className="group animate-fade-up rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-elegant">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-gradient text-primary-foreground transition-transform group-hover:rotate-6">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <img src={library.url} alt="Estudantes na biblioteca" width={1024} height={1536} loading="lazy"
          className="mx-auto aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-elegant" />
        <div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Uma escola mais próxima de cada aluno</h2>
          <p className="mt-4 text-lg text-muted-foreground">Professores registram aulas e notas em segundos, alunos acompanham sua evolução e famílias recebem avisos importantes sem papelada.</p>
          <Button asChild size="lg" className="mt-8 rounded-full px-8"><Link to="/login">Começar agora <ArrowRight /></Link></Button>
        </div>
      </section>

      <footer className="bg-brand-gradient py-8 text-center text-sm text-primary-foreground">
        © 2026 SEA — Sistema Educacional Avançado
      </footer>
    </div>
  );
}
