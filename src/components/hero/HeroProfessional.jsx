import Container from "../Container";
import { useNiche } from "../../hooks/useNiche";
import { NICHES } from "../../config/niches";

export default function HeroProfessional() {
    const niche = useNiche();
    const cfg = NICHES[niche];

    return (
        <section className="relative bg-bg">
            <Container>
                <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
                            {cfg.heroTitle}
                        </h1>
                        <p className="mt-5 text-base leading-7 text-muted">{cfg.heroSubtitle}</p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a className="rounded-2xl bg-primary px-6 py-3 text-center text-sm font-semibold text-primaryFg hover:opacity-90" href="#contato">
                                {cfg.ctaPrimary}
                            </a>
                            <a className="rounded-2xl border border-border bg-surface px-6 py-3 text-center text-sm font-semibold text-text hover:opacity-90" href="#sobre">
                                {cfg.ctaSecondary}
                            </a>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {[
                                ["Atendimento online", "Flexível e prático"],
                                ["Presencial", "Ambiente acolhedor"],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-3xl border border-border bg-surface p-5 shadow-soft">
                                    <p className="text-sm font-bold text-text">{t}</p>
                                    <p className="mt-1 text-xs text-muted">{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-3xl bg-primary" />
                            <div>
                                <p className="text-lg font-bold text-text">{cfg.brandName}</p>
                                <p className="text-sm text-muted">CRP/Registro • Especialidade</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3">
                            <div className="rounded-2xl border border-border bg-bg p-4">
                                <p className="text-sm font-semibold text-text">Como funciona</p>
                                <p className="mt-1 text-xs text-muted">
                                    1) Você chama no WhatsApp • 2) Agenda • 3) Atendimento.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-bg p-4">
                                <p className="text-sm font-semibold text-text">Foco</p>
                                <p className="mt-1 text-xs text-muted">
                                    Página pessoal, autoridade e conversão sem poluição visual.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
