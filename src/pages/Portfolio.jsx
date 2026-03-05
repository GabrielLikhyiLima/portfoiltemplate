import Container from "../components/Container";

export default function Portfolio() {
    const demos = [
        {
            title: "Clínica / Consultório",
            desc: "Site profissional focado em credibilidade e agendamento rápido.",
            link: "/?niche=clinic",
        },
        {
            title: "Profissional Autônomo",
            desc: "Página pessoal elegante para psicólogos, nutricionistas e consultores.",
            link: "/?niche=professional",
        },
        {
            title: "Barbearia",
            desc: "Layout moderno para barbearias e estética masculina.",
            link: "/?niche=barbershop",
        },
    ];

    return (
        <div className="bg-bg min-h-screen">

            <Container>

                {/* HEADLINE */}
                <div className="py-20 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-text">
                        Sites profissionais para negócios locais
                    </h1>

                    <p className="mt-4 text-muted text-lg">
                        Sites rápidos, modernos e prontos para transformar visitantes em clientes.
                    </p>
                </div>
                <p className="mt-2 text-muted text-sm">
                    Ideal para clínicas, profissionais autônomos e barbearias.
                </p>

                {/* DEMOS */}
                <div className="grid md:grid-cols-3 gap-6 pb-16">

                    {demos.map((demo) => (
                        <div
                            key={demo.title}
                            className="border border-border rounded-3xl p-6 bg-surface shadow-soft flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-text">
                                    {demo.title}
                                </h3>

                                <p className="text-muted mt-2 text-sm">
                                    {demo.desc}
                                </p>
                            </div>

                            <a
                                href={demo.link}
                                className="mt-6 block text-center bg-primary text-primaryFg font-semibold py-3 rounded-xl hover:opacity-90"
                            >
                                Ver demo
                            </a>
                        </div>
                    ))}

                </div>

                {/* BENEFÍCIOS */}
                <div className="text-center border border-border rounded-3xl p-8 bg-surface shadow-soft">

                    <p className="text-text font-semibold">
                        Entrega em 7–10 dias • Responsivo • SEO básico • Suporte
                    </p>

                    <a
                        href="https://wa.me/5531999999999"
                        className="inline-block mt-6 bg-primary text-primaryFg font-bold px-8 py-4 rounded-2xl hover:opacity-90"
                    >
                        Chamar no WhatsApp
                    </a>

                </div>

            </Container>

        </div>
    );
}