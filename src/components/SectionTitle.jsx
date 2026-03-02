export default function SectionTitle({ kicker, title, subtitle }) {
    return (
        <div className="mx-auto max-w-2xl text-center">
            {kicker ? (
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                    {kicker}
                </p>
            ) : null}
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                {title}
            </h2>
            {subtitle ? (
                <p className="mt-4 text-base leading-7 text-muted">{subtitle}</p>
            ) : null}
        </div>
    );
}
