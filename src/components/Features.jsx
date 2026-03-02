import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { siteConfig } from "../config/siteConfig";

export default function Features() {
    return (
        <section id="diferenciais" className="bg-bg py-16">
            <Container>
                <SectionTitle
                    kicker="Diferenciais"
                    title="Feito para passar confiança e gerar ação"
                    subtitle="Estrutura pronta para conversão: CTA forte, WhatsApp fácil e layout organizado."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {siteConfig.features.map((f) => (
                        <div
                            key={f.title}
                            className="rounded-3xl border border-border bg-surface p-6"
                        >
                            <h3 className="text-base font-bold text-text">{f.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
