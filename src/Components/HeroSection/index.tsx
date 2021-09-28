import React, { useEffect, useRef } from "react";
import {
    HeroContainer,
    H1,
    ImageBackground,
    TextWrapper,
    Content,
    P,
    TopText,
    IntroContainer,
    IntroText,
    HideText,
    SpanText,
    Slider,
} from "./HeroElements";
import { gsap } from "gsap";
interface Props {
    id: string;
}

const HeroSection: React.FC<Props> = ({ id }) => {
    const intro = useRef<HTMLDivElement>(null);
    const introText = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    const hideText = gsap.utils.selector(introText);
    const textWrapper = useRef<HTMLDivElement>(null);
    const tl = useRef<GSAPTimeline>();
    useEffect(() => {
        tl.current = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.current.to(hideText(".text"), {
            y: "0%",
            duration: 1,
            stagger: 0.25,
        });
        tl.current.to(slider.current, {
            y: "-100%",
            duration: 1.5,
            delay: 2,
        });
        tl.current.to(intro.current, { y: "-100%", duration: 1 }, "-=1");
        tl.current.fromTo(textWrapper.current, { opacity: 0 }, { opacity: 1 });
    }, []);
    return (
        <>
            <IntroContainer ref={intro}>
                <IntroText ref={introText}>
                    <HideText>
                        <SpanText className="text">Hey there I'm</SpanText>
                    </HideText>
                    <HideText>
                        <SpanText className="text">Miqueas Kim,</SpanText>
                    </HideText>
                    <HideText>
                        <SpanText className="text">
                            but you can call me
                        </SpanText>
                    </HideText>
                </IntroText>
                <Slider ref={slider}></Slider>
            </IntroContainer>
            <HeroContainer id={id}>
                <ImageBackground />
                <Content>
                    <TextWrapper ref={textWrapper}>
                        <H1>Miqueas</H1>
                        <H1>'Micky'</H1>
                        <H1>Kim</H1>
                    </TextWrapper>
                </Content>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
