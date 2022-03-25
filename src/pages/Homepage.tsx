import React, { useEffect, useState, useRef } from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
    experienceData,
    projectsData,
    websiteData,
    educationData,
    construlitaData,
} from "../Components/InfoSection/Data";

const Homepage = () => {
    useEffect(() => {
        document.title = "Miqueas 'Micky' Kim";
    }, []);

    return (
        <div>
            <HeroSection id="main" />
            <InfoSection {...construlitaData} />
            <InfoSection {...websiteData} />
            <InfoSection {...projectsData} />
            <InfoSection {...educationData} />
            <InfoSection {...experienceData} />
            <Footer />
        </div>
    );
};

export default Homepage;
