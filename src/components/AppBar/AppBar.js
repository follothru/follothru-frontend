import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logoImage from '../../assets/images/logo-white.png';
import PropTypes from 'prop-types';
import { userSelector } from '../../redux/auth/selectors';
import { connect } from 'react-redux';
import { signOut } from '../../redux/auth/actions';
import './app-bar-component.scss';

const AppBar = ({ user, signOut }) => {
  const handleLogOut = () => {
    signOut();
  };

  return (
    <div className="app-bar-component">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/app">
          <img alt="" src={logoImage} height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav className="drop-down-nav">
            {user && <NavDropdown title={user.preferName} id="collasible-nav-dropdown">
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogOut}>Log out</NavDropdown.Item>
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

AppBar.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: userSelector(state)
});

const mapDispatchToProps = {
  signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
