import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { siteConfig } from "../config/siteConfig";

export default function Testimonials() {
    return (
        <section id="depoimentos" className="bg-bg py-16">
            <Container>
                <SectionTitle
                    kicker="Depoimentos"
                    title="Resultados que viram prova social"
                    subtitle="Depoimentos simples (e verdadeiros) aumentam muito a conversão."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {siteConfig.testimonials.map((t) => (
                        <figure
                            key={t.name}
                            className="rounded-3xl border border-border bg-surface p-6 shadow-soft"
                        >
                            <blockquote className="text-sm leading-7 text-muted">
                                “{t.text}”
                            </blockquote>
                            <figcaption className="mt-4 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold text-text">{t.name}</p>
                                    <p className="text-xs text-muted">{t.role}</p>
                                </div>
                                <span className="text-xs font-semibold text-muted">Cliente</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Container>
        </section>
    );
}
