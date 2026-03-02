import { siteConfig } from "../config/siteConfig";

export default function WhatsAppFloat() {
    return (
        <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-5 right-5 z-50 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primaryFg shadow-lg hover:opacity-90"
            aria-label="Chamar no WhatsApp"
        >
            WhatsApp
        </a>
    );
}
