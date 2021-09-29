import styled from "styled-components";
import heroImage from "../../assets/images/mickyHero.jpg";
// -------- Intro Elements ---------
export const IntroContainer = styled.div`
    background: #69b251;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const IntroText = styled.div`
    color: white;
    font-size: 2rem;
    text-align: center;
`;

export const HideText = styled.h1`
    overflow: hidden;
`;

export const SpanText = styled.span`
    transform: translateY(100%);
    display: inline-block;
`;

export const Slider = styled.div`
    background: white;
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
    height: 750px;
    width: 100%;
    max-width: 1700px;
    justify-content: center;
    align-content: center;
    background-color: ${(props) => props.theme.trueWhite};
`;

export const ImageBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: 
    /* Background image filter */ linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.2) 100%
        ),
        /* Actual Image */ url(${heroImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 1;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    /* max-width: 1200px; */
    padding: 3.5rem 2.5rem;
    z-index: 2;
    color: ${(props) => props.theme.primaryTextDark};
`;

export const TextWrapper = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
    margin-left: -6rem;
    margin-top: 5rem;
    @media screen and (max-width: 768px) {
        margin-left: -2rem;
    }
`;

export const H1 = styled.h1`
    font-size: 4rem;
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

export const ArrowWrapper = styled.div`
    position: absolute;
    font-size: 3.5rem;
    bottom: 10%;
    left: 47%;
`;
