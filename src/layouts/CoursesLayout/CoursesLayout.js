import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { coursesSelector, coursesLoadingSelector } from '../../redux/courses/selectors';
import { getCourses } from '../../redux/courses/actions';
import Spinner from '../../components/Spinner/Spinner';
import PropTypes from 'prop-types';
import CourseCard from '../../components/CourseCard/CourseCard';
import { joinUrls } from '../../utils/utils';
import _ from 'lodash';
import './courses-layout.scss';
import CreateNewCourseModal from './CreateNewCourseModal';


const CoursesLayout = ({ courses, isLoading, getCourses, match }) => {
  const renderCourses = () => _.map(courses, (course, key) =>
    <li className="course-item" key={key}><CourseCard course={course} link={joinUrls(match.url, course.id)} /></li>);

  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => { getCourses(); }, [getCourses]);

  const handleShowCreateCourse = () => setShowCreateModal(true);

  const handleHideCreateCourse = () => setShowCreateModal(false);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="courses-layout">
      <Row>
        <Col md={8}>
          <h3>Courses</h3>
        </Col>
        <Col md={4} className="operations">
          <Button variant="secondary" className="create-btn" onClick={handleShowCreateCourse}>Create new course</Button>
        </Col>
      </Row>
      <Row className="course-list-row">
        <ul className="course-list">
          {renderCourses()}
        </ul>
      </Row>
      <CreateNewCourseModal show={showCreateModal} onHide={handleHideCreateCourse} />
    </div>
  )
};

const mapStateToProps = state => ({
  courses: coursesSelector(state),
  isLoading: coursesLoadingSelector(state)
});

const mapDispatchToProps = {
  getCourses
};

CoursesLayout.propTypes = {
  courses: PropTypes.array,
  isLoading: PropTypes.bool,
  getCourses: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesLayout);
