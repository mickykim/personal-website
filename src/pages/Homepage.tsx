import React, { useEffect, useState, useRef } from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
    experienceData,
    projectsData,
    websiteData,
    websiteData2,
    educationData,
} from "../Components/InfoSection/Data";

const Homepage = () => {
    useEffect(() => {
        document.title = "Miqueas 'Micky' Kim";
    }, []);

    return (
        <div>
            <HeroSection id="main" />
            <InfoSection {...websiteData} />
            <InfoSection {...websiteData2} />
            <InfoSection {...projectsData} />
            <InfoSection {...experienceData} />
            <InfoSection {...educationData} />
            <Footer />
        </div>
    );
};

export default Homepage;
