import Container from "./Container";
import { siteConfig } from "../config/siteConfig";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-border bg-surface">
            <Container>
                <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-bold text-text">{siteConfig.brand.name}</p>
                        <p className="text-xs text-muted">{siteConfig.brand.tagline}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                        <a className="text-muted hover:text-text" href="#servicos">Serviços</a>
                        <a className="text-muted hover:text-text" href="#contato">Contato</a>
                        <a
                            className="text-muted hover:text-text"
                            href={siteConfig.links.instagram}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <p className="pb-10 text-xs text-muted">
                    © {year} {siteConfig.brand.name}. Todos os direitos reservados.
                </p>
            </Container>
        </footer>
    );
}
