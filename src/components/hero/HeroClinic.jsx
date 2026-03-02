import Container from "../Container";
import { useNiche } from "../../hooks/useNiche";
import { NICHES } from "../../config/niches";

export default function HeroClinic() {
    const niche = useNiche();
    const cfg = NICHES[niche];

    return (
        <section className="relative overflow-hidden bg-bg">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.06),transparent_50%)]" />
            <Container>
                <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            Credibilidade • Agendamento rápido • Mobile-first
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight text-text sm:text-5xl">
                            {cfg.heroTitle}
                        </h1>
                        <p className="mt-5 text-base leading-7 text-muted">{cfg.heroSubtitle}</p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a className="rounded-2xl bg-primary px-6 py-3 text-center text-sm font-semibold text-primaryFg hover:opacity-90" href="#contato">
                                {cfg.ctaPrimary}
                            </a>
                            <a className="rounded-2xl border border-border bg-surface px-6 py-3 text-center text-sm font-semibold text-text hover:opacity-90" href="#servicos">
                                {cfg.ctaSecondary}
                            </a>
                        </div>

                        <div className="mt-8 grid gap-3 rounded-3xl border border-border bg-surface p-5 shadow-soft">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-bold text-text">{cfg.brandName}</p>
                                <span className="rounded-full border border-border bg-bg px-2 py-1 text-xs font-semibold text-muted">
                                    Avaliação 4.9 ★
                                </span>
                            </div>
                            <div className="grid gap-2 text-sm text-muted">
                                <p>✅ Especialidades organizadas</p>
                                <p>✅ Estrutura e equipe em destaque</p>
                                <p>✅ Botão de WhatsApp sempre visível</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
                        <div className="rounded-2xl border border-border bg-bg p-5">
                            <p className="text-xs font-semibold text-muted">Especialidades</p>
                            <div className="mt-3 grid grid-cols-2 gap-3">
                                {["Clínico geral", "Exames", "Cardio", "Pediatria"].map((x) => (
                                    <div key={x} className="rounded-2xl border border-border bg-surface px-3 py-3 text-sm font-semibold text-text">
                                        {x}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 rounded-2xl bg-surface p-4">
                                <p className="text-sm font-bold text-text">Agende hoje</p>
                                <p className="mt-1 text-xs text-muted">Resposta rápida no WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
