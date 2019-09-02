import React, { useEffect } from 'react';
import CoursesLayout from '../CoursesLayout/CoursesLayout';
import CourseLayout from '../CourseLayout/CourseLayout';
import { Route } from 'react-router-dom';
import AppBar from '../../components/AppBar/AppBar';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/auth/actions';
import PropTypes from 'prop-types';
import SideBar from '../../components/SideBar/SideBar';
import { Container, Row, Col } from 'react-bootstrap';
import './main-layout.scss';

const OverViewLayout = () => <div>OverViewLayout</div>;

const MainLayout = ({ match, getUserInfo }) => {
  useEffect(() => { getUserInfo(); }, [getUserInfo]);

  return (
    <div className="main-layout">
      <div className="app-bar-contaioner">
        <AppBar />
      </div>
      <div className="main-container">
        <Container fluid>
          <Row>
            <Col md={2} className="side-bar-container">
              <SideBar />
            </Col>
            <Col md={10} className="content-container">
              <Route exact path={`${match.url}/`} component={OverViewLayout} />
              <Route exact path={`${match.url}/courses`} component={CoursesLayout} />
              <Route exact path={`${match.url}/courses/:courseId`} component={CourseLayout} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  getUserInfo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  getUserInfo
};

export default connect(null, mapDispatchToProps)(MainLayout);
