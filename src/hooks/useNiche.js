import { useMemo } from "react";
import { NICHES } from "../config/niches";

export function useNiche() {
    return useMemo(() => {
        const url = new URL(window.location.href);
        const niche = url.searchParams.get("niche") || "clinic";
        return NICHES[niche] ? niche : "clinic";
    }, []);
}
