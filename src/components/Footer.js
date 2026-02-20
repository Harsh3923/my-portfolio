import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";

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
            
            <p>© {new Date().getFullYear()} Harsh Patel. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
