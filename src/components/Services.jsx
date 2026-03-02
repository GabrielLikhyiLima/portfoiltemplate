import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { siteConfig } from "../config/siteConfig";

export default function Services() {
    return (
        <section id="servicos" className="bg-bg py-16">
            <Container>
                <SectionTitle
                    kicker="Serviços"
                    title="O essencial para seu negócio aparecer e vender"
                    subtitle="Pacotes simples, entregas rápidas e foco no que importa: credibilidade e contato."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {siteConfig.services.map((s) => (
                        <div
                            key={s.title}
                            className="rounded-3xl border border-border bg-surface p-6 shadow-soft"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primaryFg">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="mt-4 text-lg font-bold text-text">{s.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
