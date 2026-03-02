import Container from "./Container";
import { siteConfig } from "../config/siteConfig";

export default function Stats() {
    return (
        <section className="border-y border-border bg-surface">
            <Container>
                <div className="grid gap-4 py-10 sm:grid-cols-3">
                    {siteConfig.stats.map((s) => (
                        <div
                            key={s.label}
                            className="rounded-2xl border border-border bg-bg p-6"
                        >
                            <p className="text-3xl font-bold text-text">{s.value}</p>
                            <p className="mt-1 text-sm font-semibold text-muted">{s.label}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
