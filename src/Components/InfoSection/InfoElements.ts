import styled from "styled-components";

import { Props } from "./index";

export const InfoContainer = styled.div<Props>`
    color: #000;
    background: ${(props) =>
        props.colorTheme ? props.theme.trueWhite : props.theme.trueWhite};
`;

export const InfoWrapper = styled.div<Props>`
    height: auto;
    padding: ${(props) => (props.topText ? "2rem 0rem" : "0rem")};
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;
`;

export const TitleWrapper = styled.div`
    position: relative;
    left: 12.5%;
    border-bottom: 2px solid #ccc;
    width: 75%;
    margin-top: 5rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 768px) {
        padding-bottom: 1.5rem;
    }
`;

export const TopText = styled.p<Props>`
    color: ${(props) => props.theme.secondaryText};
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    background-color: #fff;
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid #ccc;
    padding: 5px;

    @media screen and (max-width: 768px) {
        margin-left: -0.5rem;
    }
`;

export const Row = styled.div<Props>`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    justify-content: center;
    align-items: center;
    height: 100%;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-template-areas: ${(props) =>
        props.reverse ? `"col1 col2"` : `"col2 col1"`};

    grid-column-gap: 5rem;
    @media screen and (max-width: 768px) {
        grid-template-areas: "col1" "col2";
        padding-top: 1rem;
        min-height: 500px;
    }
`;

export const Column1 = styled.div`
    grid-area: col1;
    height: 100%;
    width: 600px;
`;

export const Column2 = styled.div`
    margin-bottom: 1rem;
    height: 100%;
    grid-area: col2;
    margin-top: 2rem;
    width: 600px;
    @media screen and (max-width: 768px) {
        padding-bottom: 1.5rem;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        padding-bottom: 1.5rem;
    }
`;

export const Heading = styled.h1<Props>`
    display: inline-block;
    color: #3377cc;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.2rem;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        font-size: 2.4rem;
        margin-bottom: 1.2rem;
    }
`;
export const Subtext = styled.h2`
    font-weight: 600;
    color: #5e9516;
    margin: 0;
    margin-bottom: 1rem;
`;

export const Subtitle = styled.h3<Props>`
    display: inline-block;
    color: ${(props) => props.theme.primaryText};
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const ImgWrap = styled.div`
    height: 100%;
    max-width: 550px;

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`;

export const Img = styled.img`
    width: 100%;
`;
