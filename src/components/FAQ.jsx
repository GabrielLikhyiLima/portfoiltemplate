import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { siteConfig } from "../config/siteConfig";

export default function FAQ() {
    return (
        <section id="faq" className="bg-bg py-16">
            <Container>
                <SectionTitle
                    kicker="FAQ"
                    title="Dúvidas comuns"
                    subtitle="Deixe claro o processo e reduza objeções antes mesmo do cliente perguntar."
                />

                <div className="mt-10 grid gap-4">
                    {siteConfig.faq.map((item) => (
                        <details
                            key={item.q}
                            className="group rounded-3xl border border-border bg-surface p-6"
                        >
                            <summary className="cursor-pointer list-none font-semibold text-text">
                                <div className="flex items-center justify-between gap-4">
                                    <span>{item.q}</span>
                                    <span className="rounded-xl border border-border bg-surface px-2 py-1 text-xs text-muted group-open:hidden">
                                        Abrir
                                    </span>
                                    <span className="hidden rounded-xl border border-border bg-surface px-2 py-1 text-xs text-muted group-open:inline">
                                        Fechar
                                    </span>
                                </div>
                            </summary>
                            <p className="mt-3 text-sm leading-7 text-muted">{item.a}</p>
                        </details>
                    ))}
                </div>
            </Container>
        </section>
    );
}
