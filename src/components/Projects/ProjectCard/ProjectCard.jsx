import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) =>
        index % 2 ? (
          <ScrollAnimation animateIn="fadeInLeft" key={index} animateOnce>
            <Card>
              <CardLeft>
                <img src={list.img} alt={list.name} />
              </CardLeft>
              <CardRight>
                <h4>{list.title}</h4>
                <p>{list.description}</p>
                <TechCardContainer>
                  {list.tech_stack.map((tech, index) => (
                    <TechCard key={index}>{tech}</TechCard>
                  ))}
                </TechCardContainer>
                <BtnGroup>
                  {list.github_url.length > 0 && (
                    <a
                      className="btn SecondaryBtn btn-shadow"
                      href={list.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaGithub style={{ marginRight: "4px" }} />
                      <span>Github</span>
                    </a>
                  )}
                  {list.demo_url.length > 0 && (
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href={list.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10px" }}
                    >
                      Live ➜
                    </a>
                  )}
                </BtnGroup>
              </CardRight>
            </Card>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation animateIn="fadeInRight" key={index} animateOnce>
            <Card>
              <CardLeft>
                <img src={list.img} alt={list.name} />
              </CardLeft>
              <CardRight>
                <h4>{list.title}</h4>
                <p>{list.description}</p>
                <TechCardContainer>
                  {list.tech_stack.map((tech, index) => (
                    <TechCard key={index}>{tech}</TechCard>
                  ))}
                </TechCardContainer>
                <BtnGroup>
                  {list.github_url.length > 0 && (
                    <a
                      className="btn SecondaryBtn btn-shadow"
                      href={list.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaGithub style={{ marginRight: "4px" }} />
                      <span>Github</span>
                    </a>
                  )}
                  {list.demo_url.length > 0 && (
                    <a
                      className="btn PrimaryBtn btn-shadow"
                      href={list.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "10px" }}
                    >
                      Live ➜
                    </a>
                  )}
                </BtnGroup>
              </CardRight>
            </Card>
          </ScrollAnimation>
        )
      )}
    </>
  );
}

export default ProjectCard;
