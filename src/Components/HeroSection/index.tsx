import React from "react";
import {
    HeroContainer,
    H1,
    ImageBackground,
    TextWrapper,
    Content,
    P,
    TopText,
} from "./HeroElements";

interface Props {
    id: string;
}

const HeroSection: React.FC<Props> = ({ id }) => {
    return (
        <>
            <HeroContainer id={id}>
                <ImageBackground />
                <Content>
                    <TextWrapper>
                        <TopText> Hey there, I'm</TopText>
                        <H1> Miqueas Kim</H1>
                        <P>but you can call me Micky</P>
                    </TextWrapper>
                </Content>
            </HeroContainer>
        </>
    );
};

export default HeroSection;
