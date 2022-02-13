import Layout from "../components/Layout";
import Hero from "../sections/Hero";
import Home from "../sections/Home";
import Services from "../sections/Services";
import Pricing from "../sections/Pricing";
import Gallery from "../sections/Gallery";
import Reviews from "../sections/Reviews";
import Contact from "../sections/Contact";
import { useEffect } from "react";

export default function Landing() {
    
    return (
        <Layout>
            <Home />
            <Hero />
            <Services />
            <Pricing />
            <Gallery />
            <Reviews />
            <Contact />
        </Layout>
    );
}
