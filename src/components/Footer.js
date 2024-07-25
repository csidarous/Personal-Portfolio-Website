import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} sm={6} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/csidarous/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/csidarous"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://www.instagram.com/sidarous_16/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <br></br>
          <Col xs={12} className="text-center mt-3">
            <p>&copy; 2024 All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
