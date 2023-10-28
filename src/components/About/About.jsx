import React from "react";
import { stackList, about, tools } from "../../data/ProjectData";
import { Technologies, Tech, ContactWrapper, TechImg } from "./AboutElements";
import { TechCard } from "../Projects/ProjectCard/ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  const style = {
    height: "10px",
    border: "0",
    boxShadow: "0 10px 10px -10px #8c8c8c inset",
  };
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">
          About Me
          <hr style={style} />
        </div>
        <div className="BigCard">
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <div dangerouslySetInnerHTML={{ __html: about }} />
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <h3 style={{ fontWeight: "700" }}>
                Technologies i'm familiar with ➜
              </h3>
            </ScrollAnimation>
            <br />
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  key={index}
                  animateOut="fadeOutRight"
                >
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechCard>{stack.name}</TechCard>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
            <br />

            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <h3 style={{ fontWeight: "700" }}>Tools i'm familiar with ➜</h3>
            </ScrollAnimation>
            <br />
            <Technologies>
              {tools.map((stack, index) => (
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  key={index}
                  animateOut="fadeOutRight"
                >
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechCard>{stack.name}</TechCard>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
