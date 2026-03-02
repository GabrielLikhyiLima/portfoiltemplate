import Container from "../Container";
import { useNiche } from "../../hooks/useNiche";
import { NICHES } from "../../config/niches";

export default function HeroBarbershop() {
    const niche = useNiche();
    const cfg = NICHES[niche];

    return (
        <section className="relative overflow-hidden bg-bg">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(245,158,11,0.18),transparent_45%)]" />
            <Container>
                <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
                    <div>
                        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            Premium • Agendamento • Estilo
                        </p>

                        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
                            {cfg.heroTitle}
                        </h1>
                        <p className="mt-5 text-base leading-7 text-muted">{cfg.heroSubtitle}</p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a className="rounded-2xl bg-primary px-6 py-3 text-center text-sm font-semibold text-primaryFg hover:opacity-90" href="#contato">
                                {cfg.ctaPrimary}
                            </a>
                            <a className="rounded-2xl border border-border bg-surface px-6 py-3 text-center text-sm font-semibold text-text hover:opacity-90" href="#precos">
                                {cfg.ctaSecondary}
                            </a>
                        </div>

                        <div className="mt-10 grid gap-3 rounded-3xl border border-border bg-surface p-5 shadow-soft">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-bold text-text">{cfg.brandName}</p>
                                <span className="text-xs font-semibold text-muted">★ 4.8 (Google)</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                {["Corte", "Barba", "Navalha", "Combo"].map((x) => (
                                    <div key={x} className="rounded-2xl border border-border bg-bg px-3 py-3 text-text">
                                        <span className="font-semibold">{x}</span>
                                        <span className="ml-2 text-xs text-muted">R$</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft">
                        <div className="rounded-2xl border border-border bg-bg p-5">
                            <p className="text-xs font-semibold text-muted">Agenda de hoje</p>
                            <div className="mt-3 grid gap-3">
                                {[
                                    ["14:00", "Corte + Finalização"],
                                    ["15:30", "Barba (navalha)"],
                                    ["17:00", "Combo premium"],
                                ].map(([h, s]) => (
                                    <div key={h} className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3">
                                        <span className="text-sm font-bold text-text">{h}</span>
                                        <span className="text-sm text-muted">{s}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-xs text-muted">
                                Visual dark + destaque no CTA = conversão.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
