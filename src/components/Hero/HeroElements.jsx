import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding: 4rem 0 2rem; /* Top padding increased, bottom padding decreased */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // max-width: 1870px; /* Set a maximum width for larger screens */

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 1300px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  // text-align: center;

  flex: 1;
  margin-left: auto;
  width: 50%; /* Adjust the width for responsiveness */
  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 2rem;
      color: #f6f6f6;
      opacity: 0.98;
      font-weight: 400;
    }

    h5 {
      font-size: 1.3rem;
      color: white;
      margin-bottom: 1rem;
    }
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 80%;
    align-items: center;
    text-align: center;
    float: bottom;
    bottom: 0;
  }
`;

export const Image = styled.img`
  max-width: 100%; /* Ensure the image is responsive */
  height: auto;
  border-radius: 40px;
`;

const ScrollAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  margin-top: 40px;

  align-items: flex-start;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
