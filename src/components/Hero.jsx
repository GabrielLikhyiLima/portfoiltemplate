import { useNiche } from "../hooks/useNiche";
import HeroClinic from "./hero/HeroClinic";
import HeroProfessional from "./hero/HeroProfessional";
import HeroBarbershop from "./hero/HeroBarbershop";

export default function Hero() {
    const niche = useNiche();

    if (niche === "barbershop") return <HeroBarbershop />;
    if (niche === "professional") return <HeroProfessional />;
    return <HeroClinic />;
}
