import styled from "styled-components";

// -------- Intro Elements ---------
export const IntroContainer = styled.div`
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IntroText = styled.div`
    color: #e0f2fb;
    font-size: 2rem;
`;

export const HideText = styled.h1`
    overflow: hidden;
`;

export const SpanText = styled.span`
    transform: translateY(100%);
    display: inline-block;
`;

export const Slider = styled.div`
    background: #646c72;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
`;

// -------- HeroSection Elements -----
export const HeroContainer = styled.div`
    display: flex;
    height: 600px;
    width: 100%;
    justify-content: center;
    align-content: center;
    background-color: ${(props) => props.theme.primary};
`;

export const ImageBackground = styled.div`
    width: 100%;
    height: 100%;

    background-size: 1400px 600px;
    background-repeat: no-repeat;
    z-index: 1;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 500px;
    /* max-width: 1200px; */
    padding: 3.5rem 2.5rem;
    z-index: 2;
    color: ${(props) => props.theme.primaryTextDark};
`;

export const TextWrapper = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
`;

export const TopText = styled.h2`
    color: ${(props) => props.theme.secondaryText};
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin: 0;
    margin-left: -1rem;

    @media screen and (max-width: 768px) {
        margin-left: -0.5rem;
    }
`;
export const H1 = styled.h1`
    font-size: 5rem;
    line-height: 0.7;
    text-align: center;
    font-weight: 900;
    margin: 0;
    margin-bottom: 4rem;
    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const P = styled.p`
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;
