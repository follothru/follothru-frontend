import React from 'react';
import { connect } from 'react-redux';
import { createNewCourse } from '../../redux/courses/actions';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { useFormInput } from '../../utils/hooks';

const CreateNewCourseModal = ({ onHide, show, createNewCourse }) => {
  const courseNameInput = useFormInput();

  const handleSubmit = () => {
    createNewCourse(courseNameInput.value);
    onHide();
  };

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control type="text" placeholder="Course name" {...courseNameInput}></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

CreateNewCourseModal.propTypes = {
  createNewCourse: PropTypes.func.isRequired,
  onHide: PropTypes.func,
  show: PropTypes.bool
};

const mapDispatchToProps = {
  createNewCourse
};

export default connect(null, mapDispatchToProps)(CreateNewCourseModal);
