import React, { Component } from 'react';
import {withRouter, Link, NavLink} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { connect } from 'react-redux';
import {searchData} from "../../store/Action/vocabulary_action"
import {logout, loadUser} from "../../store/Action/authAction"
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
      name: '',
    }
  }
  // componentWillMount(){
  //   this.props.loadUser()
  // }
  onChangeSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name] : value
    });
  }
  onSubmitSearch = (e) => {
    e.preventDefault();
    const newName = this.state.name;
    this.props.searchData(this.props.history, newName);
  }
  complete = () => {
    this.setState({ loadingBarProgress: 100 });
  };

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };
  render() {
    const { isAuthenticated} = this.props.auth;
    const authLinks = (
      <div className="header-right">
        <Link className="auth" to="/" onClick={this.complete}><i className="fas fa-user-circle"></i></Link>
        <NavLink className="sigin" to="/SigIn/" onClick={this.props.logout}>log out</NavLink>
      </div>
    );
    const guestLinks = (
      <div className="header-right">
        <Link className="sigin" to="/SigIn/" onClick={this.complete}>Sig in</Link>
        <Link className="sigin" to="/SigUp/" onClick={this.complete}>Sig up</Link>
      </div>
    );
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
              <Form inline onSubmit={this.onSubmitSearch}>
                <FormControl name="name" onChange={this.onChangeSearch} type="text" placeholder="What do you want to learn?" aria-label="Search" className="mr-sm-2" />
                <Link to={`/Search`}><Button onClick={this.onSubmitSearch} variant="outline-success" type="submit"><i className="fas fa-search"></i></Button></Link> 
              </Form>
            </Navbar.Collapse>
            {
              isAuthenticated ? authLinks : guestLinks
            }
          </Navbar>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    vocabulary: state.vocabulary,
  }
}
const mapDispatchToProps = {
  searchData,
  logout,
  // loadUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));