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
} from "./InfoElements";

export interface Props {
    id?: string;
    topText?: string;
    heading?: string;
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
    subtitle,
    img,
    altImg,
    reverse = false,
    colorTheme = false,
}) => {
    return (
        <InfoContainer colorTheme={colorTheme} id={id}>
            <InfoWrapper>
                <TitleWrapper>
                    <TopText colorTheme={colorTheme}>{topText}</TopText>
                </TitleWrapper>
                <Row reverse={reverse}>
                    <Column1>
                        <TextWrapper>
                            <Heading colorTheme={colorTheme}>{heading}</Heading>
                            <Subtitle colorTheme={colorTheme}>
                                {subtitle}
                            </Subtitle>
                        </TextWrapper>
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
