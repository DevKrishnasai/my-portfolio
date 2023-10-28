import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import { sequence, name } from "../../data/ProjectData";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showSubtitle1, setShowSubtitle1] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm ", () => setShowSubtitle1(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle1 && (
                <TypeAnimation
                  cursor={false}
                  sequence={[name, () => setShowSubtitle(true)]}
                  speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                  wrapper="h1"
                  repeat={0}
                />
              )}
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    ...sequence,
                    () => setShowScrollDown(true),
                    "Seriously, my projects are really cool, go check them out!",
                    1000,
                    "See ya! :)",
                    2000,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
              {showScrollDown && (
                <ScrollAnimation animateIn="flipInX" offset={0}>
                  <ScrollDown to="projects" id="scrollDown">
                    <ScrollLink>
                      Scroll down
                      <img src="/scroll-down.svg" alt="scroll-down" />
                    </ScrollLink>
                  </ScrollDown>
                </ScrollAnimation>
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/photo.png" alt="man-svgrepo" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
