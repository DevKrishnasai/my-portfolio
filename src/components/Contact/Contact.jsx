import React, { useState } from "react";
import { ContactWrapper, Go } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TechCard } from "../Projects/ProjectCard/ProjectCardElements";
import { email, links } from "../../data/ProjectData";

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        {/* <div className="SectionTitle">Get In Touch</div> */}
        <ScrollAnimation animateIn="fadeIn">
          <div
            className="BigCard "
            style={{
              padding: "30px",
              display: "flex",
              flexDirection: "row",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              columnGap: "10px",
              rowGap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                rowGap: "10px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TechCard style={{ display: "contents" }}>
                <span>{email}</span>
              </TechCard>
              <Go className="go">
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                      className="go"
                    />
                  </IconButton>
                </Tooltip>
              </Go>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "30px",
                rowGap: "10px",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignContent: "center",
              }}
            >
              <a
                href={links["github"]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "45px",
                  marginRight: "10px",
                  textAlign: "center",
                  display: "contents",
                }}
              >
                <FaGithub className="icon" />
              </a>

              <a
                href={links["linkedin"]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "45px",
                  marginRight: "10px",
                  display: "contents",
                  color: "#0077B5",
                }}
              >
                <FaLinkedin className="icon" />
              </a>

              <a
                href={links["instagram"]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "45px",
                  marginRight: "10px",
                  display: "contents",
                  color: "rgb(228, 64, 95)",
                }}
              >
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
