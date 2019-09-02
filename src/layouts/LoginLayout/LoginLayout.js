import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../../redux/auth/actions';
import { tokenSelector } from '../../redux/auth/selectors';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import logoImage from '../../assets/images/logo-black.png';
import './login-layout.scss';
import { useFormInput } from '../../utils/hooks';

const LoginLayout = ({ signIn, token }) => {
  const emailInput = useFormInput();
  const passwordInput = useFormInput();

  function handleLogin(e) {
    e.preventDefault();
    signIn(emailInput.value, passwordInput.value);
  }

  if (token !== null) {
    return <Redirect to="/app" />;
  }

  return (
    <div className="login-layout">
      <Container>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <img alt="" className="logo-img" src={logoImage} />
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formHorizontalEmail">
                <Form.Control type="email" placeholder="Email" {...emailInput} />
              </Form.Group>

              <Form.Group controlId="formHorizontalPassword">
                <Form.Control type="password" placeholder="Password" {...passwordInput} />
              </Form.Group>

              <Form.Group>
                <Button type="submit" size="lg" block>Sign in</Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={4} />
        </Row>
      </Container>
    </div>
  );
};

LoginLayout.propTypes = {
  token: PropTypes.string,
  signIn: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: tokenSelector(state)
});

const mapDispatchToProps = {
  signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);
