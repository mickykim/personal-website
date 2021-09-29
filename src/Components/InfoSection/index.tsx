import React from "react";
import { TextWrapper } from "../HeroSection/HeroElements";
import {
    Column1,
    Column2,
    Row,
    InfoContainer,
    InfoWrapper,
    Subtitle,
    TopText,
    TitleWrapper,
    Heading,
    ImgWrap,
    Img,
    Subtext,
} from "./InfoElements";

export interface Props {
    id?: string;
    topText?: string;
    heading?: string;
    subtext?: string;
    subtitle?: string;
    img?: string;
    altImg?: string;
    reverse?: boolean;
    colorTheme?: boolean;
}

const InfoSection: React.FC<Props> = ({
    id,
    topText,
    heading,
    subtext,
    subtitle,
    img,
    altImg,
    reverse = false,
    colorTheme = false,
}) => {
    return (
        <InfoContainer colorTheme={colorTheme} id={id}>
            {topText && (
                <TitleWrapper>
                    <TopText colorTheme={colorTheme}>{topText}</TopText>
                </TitleWrapper>
            )}
            <InfoWrapper topText={topText}>
                <Row reverse={reverse}>
                    <Column1>
                        <Heading colorTheme={colorTheme}>{heading}</Heading>
                        <Subtext>{subtext}</Subtext>
                        <Subtitle colorTheme={colorTheme}>{subtitle}</Subtitle>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={altImg} />
                        </ImgWrap>
                    </Column2>
                </Row>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
