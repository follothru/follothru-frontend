import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { courseSelector, courseLoadingSelector } from '../../redux/course/selectors';
import { getCourse } from '../../redux/course/actions';
import PropTypes from 'prop-types';
import Spinner from '../../components/Spinner/Spinner';
import { getReminders } from '../../redux/reminders/actions';
import RemindersList from '../../components/RemindersList/RemindersList';
import { Row, Col, Button } from 'react-bootstrap';
import CreateReminderModal from './CreateReminderModal';

const CourseLayout = ({ match, isLoading, course, getCourse, getReminders }) => {
  const { courseId } = match.params;
  useEffect(() => { getCourse(courseId); }, [courseId, getCourse]);
  useEffect(() => {
    isLoading && getReminders(courseId);
  }, [courseId, getReminders, isLoading]);

  const [showCreate, setShowCreate] = useState(false);

  if (isLoading) {
    return <Spinner />;
  }

  return course &&
    <div className="course-layout">
      <Row>
        <Col>
          <h3>{course.name}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" onClick={() => setShowCreate(true)}>Create reminder</Button>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <RemindersList />
        </Col>
      </Row>
      <CreateReminderModal show={showCreate} onHide={() => setShowCreate(false)} />
    </div>
};

CourseLayout.propTypes = {
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  course: PropTypes.object,
  getCourse: PropTypes.func.isRequired,
  getReminders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: courseLoadingSelector(state),
  course: courseSelector(state)
});

const mapDispatchToProps = {
  getCourse,
  getReminders
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseLayout);
