import { useEffect, useState } from "react";
import Container from "./Container";
import { siteConfig } from "../config/siteConfig";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const nav = [
        { label: "Serviços", href: "#servicos" },
        { label: "Diferenciais", href: "#diferenciais" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "FAQ", href: "#faq" },
        { label: "Contato", href: "#contato" },
    ];

    return (
        <header
            className={[
                "sticky top-0 z-50 border-b bg-bg/80 backdrop-blur",
                scrolled ? "border-border shadow-sm" : "border-transparent",
            ].join(" ")}

        >
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-2">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primaryFg">
                            <span className="text-sm font-bold">S</span>
                        </div>
                        <div className="leading-tight">
                            <p className="text-sm font-bold text-text">{siteConfig.brand.name}</p>
                            <p className="text-xs text-muted">Websites profissionais</p>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-6 md:flex">
                        {nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted hover:text-text"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={siteConfig.links.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primaryFg hover:opacity-90"
                        >
                            {siteConfig.cta.primary}
                        </a>
                    </nav>

                    <button
                        className="rounded-xl border border-border px-3 py-2 text-sm font-semibold text-text md:hidden"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Abrir menu"
                    >
                        Menu
                    </button>
                </div>

                {open ? (
                    <div className="pb-4 md:hidden">
                        <div className="grid gap-2 rounded-2xl border border-border bg-surface p-3">
                            {nav.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-xl px-3 py-2 text-sm font-medium text-muted hover:bg-bg hover:text-text"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href={siteConfig.links.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl bg-primary px-3 py-2 text-center text-sm font-semibold text-primaryFg hover:opacity-90"
                                onClick={() => setOpen(false)}
                            >
                                {siteConfig.cta.primary}
                            </a>
                            <a
                                href="/portfolio"
                                className="text-sm font-medium text-muted hover:text-text"
                            >
                                Portfólio
                            </a>
                        </div>
                    </div>
                ) : null}
            </Container>
        </header>
    );
}
