import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { siteConfig } from "../config/siteConfig";

export default function Contact() {
    return (
        <section id="contato" className="bg-bg py-16">
            <Container>
                <SectionTitle
                    kicker="Contato"
                    title="Vamos colocar seu site no ar?"
                    subtitle="Clique no WhatsApp ou envie uma mensagem por e-mail. Respondo rápido."
                />

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-border bg-surface p-6">
                        <h3 className="text-base font-bold text-text">Contato direto</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">
                            Melhor caminho: WhatsApp com objetivo e urgência.
                        </p>

                        <div className="mt-6 grid gap-3">
                            <a
                                href={siteConfig.links.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-2xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primaryFg hover:opacity-90"
                            >
                                {siteConfig.cta.primary}
                            </a>

                            <a
                                href={`mailto:${siteConfig.links.email}`}
                                className="rounded-2xl border border-border bg-surface px-5 py-3 text-center text-sm font-semibold text-text hover:bg-bg"
                            >
                                Enviar e-mail
                            </a>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-border bg-bg p-6">
                        <h3 className="text-base font-bold text-text">Checklist rápido</h3>
                        <ul className="mt-4 grid gap-3 text-sm text-muted">
                            <li>✅ Definir nicho e objetivo do site</li>
                            <li>✅ Coletar logo, cores e fotos</li>
                            <li>✅ Organizar serviços e diferenciais</li>
                            <li>✅ Publicar e conectar domínio</li>
                        </ul>
                        <p className="mt-4 text-xs text-muted">
                            Dica: mesmo sem logo, dá pra começar com uma marca simples.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
