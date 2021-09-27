type Data = {
    id: string;
    topText: string;
    heading: string;
    subtitle: string;
    colorTheme: boolean;
    reverse: boolean;
};

export const websiteData: Data = {
    id: "section1",
    topText: "My Websites",
    heading: "My Websites",
    subtitle: `My websites presenting differnet things and technologies`,
    colorTheme: false,
    reverse: false,
};

export const projectsData: Data = {
    id: "section2",
    topText: "Additional Projects",
    heading: "Science you can trust",
    subtitle: `We calculate the air quality by checking current 
    air conditions with respect to the general guidelines provided 
    on air quality.`,
    colorTheme: true,
    reverse: true,
};

export const enjoyData: Data = {
    id: "section3",
    topText: "Enjoy",
    heading: "Experience perfection",
    subtitle: `Stop worrying about the possibilities and enjoy the present`,
    colorTheme: false,
    reverse: false,
};
