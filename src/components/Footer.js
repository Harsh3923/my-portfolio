import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Removed MailchimpForm */}

          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© {new Date().getFullYear()} Harsh Patel. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
