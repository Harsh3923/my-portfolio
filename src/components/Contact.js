import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import navIcon1 from "../assets/nav-icon1.svg"; // LinkedIn icon
import navIcon2 from "../assets/nav-icon2.svg"; // Facebook icon (or whatever you used)
import navIcon3 from "../assets/nav-icon3.svg"; // Instagram icon (or whatever you used)
import githubicon from "../assets/github_icon.svg";

export const Contact = () => {
  const links = [
    {
      name: "LinkedIn",
      username: "Harsh Patel",
      href: "https://www.linkedin.com/in/harsh-patel-74a060368/",
      icon: navIcon1,
    },
    {
      name: "GitHub",
      username: "Harsh3923",
      href: "https://github.com/Harsh3923",
      icon: githubicon, 
    },
    {
      name: "Instagram",
      username: "arshh_patel",
      href: "https://www.instagram.com/arshh_patel/",
      icon: navIcon3,
    },
  ];

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ marginBottom: 12 }}>Get In Touch</h2>
                  <p style={{ opacity: 0.85, maxWidth: 720 }}>
                    Want to collaborate, hire, or just talk ideas at the intersection of{" "}
                    <strong>code</strong> and <strong>culture</strong>? Find me here:
                  </p>

                  <div
                    style={{
                      marginTop: 28,
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: 16,
                    }}
                  >
                    {links.map((l) => (
                      <a
                        key={l.name}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                        title={`@${l.username}`}  // 👈 hover tooltip
                        style={{
                          textDecoration: "none",
                          borderRadius: 18,
                          padding: 18,
                          border: "1px solid rgba(255,255,255,0.18)",
                          background: "rgba(255,255,255,0.06)",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          transition: "transform 0.15s ease, background 0.15s ease, border 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.28)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0px)";
                          e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.18)";
                        }}
                      >
                        <div
                          style={{
                            width: 46,
                            height: 46,
                            borderRadius: 14,
                            display: "grid",
                            placeItems: "center",
                            background: "rgba(128, 90, 213, 0.25)",
                            border: "1px solid rgba(128, 90, 213, 0.35)",
                          }}
                        >
                          <img src={l.icon} alt={l.name} style={{ width: 22, height: 22 }} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: 700, color: "#fff" }}>{l.name}</span>
                          <span style={{ opacity: 0.75, color: "#fff" }}>@{l.username}</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div style={{ marginTop: 22, opacity: 0.75 }}>
                    Prefer email?{" "}
                    <a
                      href="mailto:hp.harsh2356@gmail.com"
                      style={{ color: "#fff", textDecoration: "underline" }}
                      title="hp.harsh2356@gmail.com"
                    >
                      hp.harsh2356@gmail.com
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};