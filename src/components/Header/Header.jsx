import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import './Header.css'
import {Container,
        Navbar,
        Nav,
        NavDropdown,
        Form,
        FormControl,
        Button

} from 'react-bootstrap'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingBarProgress: 0,
    }
  }
  complete = () => {
    this.setState({ loadingBarProgress: 100 });
  };

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };
  render() {
    return (
      <div className="header">
         <LoadingBar
          progress={this.state.loadingBarProgress}
          height={3}
          color="#FFF200"
          onLoaderFinished={() => this.onLoaderFinished()}
        />
        <Container>
          <Navbar bg="light" expand="lg">
            <Link to="/" className="navbar-brand" onClick={this.complete}>Online English<span className="title-logo">Learn By Hear</span></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Course" id="basic-nav-dropdown">
                  <Link to="/vocabulary/" className="dropdown-item" onClick={this.complete}><i className="fas fa-book mr-2"></i>Học từ vựng</Link>
                  <Link to="/grammar/" className="dropdown-item" onClick={this.complete}><i className="fas fa-book mr-2"></i>Luyện ngữ pháp</Link>
                  <Link to="/Music/" className="dropdown-item" onClick={this.complete}><i className="fas fa-music mr-2"></i>Học tiếng anh qua bài hát</Link>
                  <Link to="/TestToeic/" className="dropdown-item" onClick={this.complete}><i className="fas fa-book-open mr-2"></i>Test TOEIC</Link>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="What do you want to learn?" className="mr-sm-2" />
                <Button variant="outline-success"><i className="fas fa-search"></i></Button>
              </Form>
            </Navbar.Collapse>
            <div className="header-right">
              <Link className="sigin" to="/SigIn/" onClick={this.complete}>Sig in</Link>
              <Link className="sigin" to="/SigUp/" onClick={this.complete}>Sig up</Link>
          </div>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;