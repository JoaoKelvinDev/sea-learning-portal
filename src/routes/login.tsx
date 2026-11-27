import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GraduationCap, Mail, Lock, Info, BookOpen, Pencil, Calculator, Lightbulb, Eye, EyeOff } from "lucide-react";
import library from "@/assets/library.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar — SEA" },
      { name: "description", content: "Acesse seu painel no Sistema Educacional Avançado." },
      { property: "og:title", content: "Entrar — SEA" },
      { property: "og:description", content: "Acesse atividades, conquistas e relatórios no Sistema Educacional Avançado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Login,
});

function Login() {
  const [show, setShow] = useState(false);
  const onSubmit = (e: FormEvent) => e.preventDefault();
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden overflow-hidden lg:block">
        <img src={library.url} alt="Estudantes na biblioteca" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-brand-gradient opacity-80" />
        {[BookOpen, Pencil, Calculator, Lightbulb].map((Icon, i) => (
          <Icon key={i} className="absolute size-12 animate-float text-primary-foreground/40"
            style={{ top: `${15 + i * 20}%`, left: `${i % 2 ? 70 : 12}%`, animationDelay: `${-i * 1.5}s` }} />
        ))}
        <div className="relative flex h-full flex-col justify-end p-12 text-primary-foreground">
          <h2 className="animate-fade-up text-4xl font-bold leading-tight">"A educação é a arma mais poderosa para mudar o mundo."</h2>
          <p className="mt-4 animate-fade-up text-primary-foreground/80 [animation-delay:200ms]">— Nelson Mandela</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden bg-background px-6 py-12">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 animate-blob rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-72 animate-blob rounded-full bg-brand-orange/20 blur-3xl [animation-delay:-6s]" />
        <div className="relative w-full max-w-md animate-fade-up">
          <Link to="/" className="mx-auto grid size-20 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-elegant transition-transform hover:rotate-6">
            <GraduationCap className="size-10" />
          </Link>
          <h1 className="mt-6 text-center text-4xl font-extrabold text-foreground">SEA</h1>
          <p className="mt-1 text-center text-muted-foreground">Sistema Educacional Avançado</p>

          <form onSubmit={onSubmit} className="mt-10 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="seu@email.com" className="h-12 rounded-xl pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="senha" type={show ? "text" : "password"} placeholder="••••••••" className="h-12 rounded-xl px-10" />
                <button type="button" aria-label={show ? "Ocultar senha" : "Mostrar senha"} onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="h-12 w-full rounded-xl bg-brand-gradient text-base shadow-elegant transition-transform hover:scale-[1.02]">Entrar</Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Aluno novo? <a href="#" className="font-semibold text-primary hover:underline">Cadastre-se</a>
          </p>
          <div className="mt-6 flex gap-3 rounded-xl bg-accent p-4 text-sm text-accent-foreground">
            <Info className="mt-0.5 size-4 shrink-0" />
            <div><p className="font-semibold">Acesse com suas credenciais cadastradas.</p>
              <p className="mt-1 opacity-80">Se não tiver acesso ou esqueceu sua senha, entre em contato com a administração da instituição.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
