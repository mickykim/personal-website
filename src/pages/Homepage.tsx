import React from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { projectsData, websiteData } from "../Components/InfoSection/Data";

const Homepage = () => {
    return (
        <div>
            <HeroSection id="main" />
            <InfoSection {...websiteData} />
            <InfoSection {...projectsData} />
            <Footer />
        </div>
    );
};

export default Homepage;
