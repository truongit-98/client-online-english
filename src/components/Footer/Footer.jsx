import React, { Component } from 'react';
import './Footer.css';
import {Container,Row} from 'react-bootstrap'
class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
         <Container>
          <Row className="footer">
            <div className="col-xs-6 col-sm-4 col-md-2">
              <h5 className="footer-item">about Online English</h5>
              <a className="footer-link" href="/">Our story</a>
              <a className="footer-link" href="/">History</a>
              <a className="footer-link" href="/">Contact Us</a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <h5 className="footer-item">Products-Service</h5>
              <a className="footer-link" href="/">VOCABULARY</a>
              <a className="footer-link" href="/">VOCA MUSIC</a>
              <a className="footer-link" href="/">VOCA GRAMMAR</a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <h5 className="footer-item">Help</h5>
              <a className="footer-link" href="/">Support Center</a>
              <a className="footer-link" href="/">Start Here</a>
              <a className="footer-link" href="/">Learning Guide</a>
              <a className="footer-link" href="/">Buy-Payment</a>
              <a className="footer-link" href="/">Email Contact</a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <h5 className="footer-item">Policies-Terms</h5>
              <a className="footer-link" href="/">Terms-Conditions </a>
              <a className="footer-link" href="/">Intellectual Property</a>
              <a className="footer-link" href="/">Certificates</a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
            <h5 className="footer-item">Social Network </h5>
              <a className="footer-link" href="/">Blog</a>
              <a className="footer-link" href="/">Facebook</a>
              <a className="footer-link" href="/">Youtobe</a>
              <a className="footer-link" href="/">Zalo</a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
            <h5 className="footer-item">Head Office </h5>
              <a className="footer-link" href="/">FANKEN Ltd. Company</a>
              <a className="footer-link" href="/">Address: Hoàng Quốc Việt,Cầu giấy, Hà nội.</a>
              <a className="footer-link" href="/">Email: trung9977.mta@gmail.com</a>
              <a className="footer-link" href="/">Phone: 0392389977</a>
            </div>
          </Row>
          <hr/>
          <p className="footer-bottom"><i className="far fa-copyright mr-2"></i>Bản quyền thuộc Team MTA-KTPM</p>
        </Container>
      </footer>
    );
  }
}

export default Footer;