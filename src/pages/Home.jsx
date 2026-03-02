import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Stats />
                <Services />
                <Features />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
