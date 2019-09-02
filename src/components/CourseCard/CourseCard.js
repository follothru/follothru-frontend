import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './course-card-component.scss';

const CourseCard = ({ course, link }) => {
  const renderBody = () => (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
      </Card.Body>
    </Card>
  );

  return (
    <div className="course-card-component">
      <Link className="course-link" to={link}>
        {renderBody()}
      </Link>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired,
  link: PropTypes.string
};

export default CourseCard;
