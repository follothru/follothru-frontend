import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createReminder } from '../../redux/reminders/actions';
import { Modal, Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useDatePickerInput, useFormInput } from '../../utils/hooks';

const expirationTypes = {
  ONE_END_DATE: 'Yes (e.g., an exam date)',
  MORE_THAN_ONE_END_DATE: 'Yes, more than one (e.g., weekly assignment due dates)',
  NO_END_DATE: 'Not really (e.g., daily practice)'
};

const CreateReminderModal = ({ onHide, show }) => {
  const endDateInput = useDatePickerInput();
  const startDateInput = useDatePickerInput();
  const startTimeInput = useDatePickerInput();
  const canExpireInput = useFormInput(expirationTypes.ONE_END_DATE);

  const handleSubmit = () => {
    console.log("submit");
    onHide();
  }

  const renderSendInAdvancedInput = () => (
    <Form.Group>
      <Form.Label>
        When should reminders be sent?
        </Form.Label>
      <Form.Control as="select" >
        <option>1 hour before</option>
        <option>1 day before</option>
        <option>1 week before</option>
        <option>Custom</option>
      </Form.Control>
    </Form.Group>
  );

  const renderWithExpireDate = () => (
    <React.Fragment>
      <Form.Group>
        <Form.Label>
          What is that date?
            </Form.Label>
        <br />
        <DatePicker {...startDateInput} className="form-control" />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          What is that time?
            </Form.Label>
        <br />
        <DatePicker {...startTimeInput} timeCaption="Time" dateFormat="h:mm aa" showTimeSelect showTimeSelectOnly className="form-control" />
      </Form.Group>
      {renderSendInAdvancedInput()}
    </React.Fragment>
  );

  const renderWithMoreThanOneExpire = () => (
    <React.Fragment>
      <Form.Group>
        <Form.Label>
          How often do these dates occur?
        </Form.Label>
        <Form.Control as="select">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Custom</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          What is the first date?
        </Form.Label>
        <br />
        <DatePicker {...startDateInput} className="form-control" />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          What is that time?
        </Form.Label>
        <br />
        <DatePicker {...startTimeInput} timeCaption="Time" dateFormat="h:mm aa" showTimeSelect showTimeSelectOnly className="form-control" />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          What is the last date?
        </Form.Label>
        <br />
        <DatePicker {...endDateInput} className="form-control" />
      </Form.Group>
      {renderSendInAdvancedInput()}
    </React.Fragment>
  );

  const renderNoEndDateInputs = () => (
    <React.Fragment>
      {renderSendInAdvancedInput()}
      <Form.Group>
        <Form.Label>
          When would you like to start sending reminders?
        </Form.Label>
        <br />
        <DatePicker {...startDateInput} className="form-control" />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          What is that time?
        </Form.Label>
        <br />
        <DatePicker {...startTimeInput} timeCaption="Time" dateFormat="h:mm aa" showTimeSelect showTimeSelectOnly className="form-control" />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          When would you like to stop sending reminders?
        </Form.Label>
        <br />
        <DatePicker {...endDateInput} className="form-control" />
      </Form.Group>
    </React.Fragment>
  );

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Create new reminder
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              What is the title of your reminder?
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Is there an expiration date (e.g., assignment deadline, exam date) associated with this reminder?
            </Form.Label>
            <Form.Control {...canExpireInput} as="select">
              <option>{expirationTypes.ONE_END_DATE}</option>
              <option>{expirationTypes.MORE_THAN_ONE_END_DATE}</option>
              <option>{expirationTypes.NO_END_DATE}</option>
            </Form.Control>
          </Form.Group>
          {canExpireInput.value === expirationTypes.ONE_END_DATE && renderWithExpireDate()}
          {canExpireInput.value === expirationTypes.MORE_THAN_ONE_END_DATE && renderWithMoreThanOneExpire()}
          {canExpireInput.value === expirationTypes.NO_END_DATE && renderNoEndDateInputs()}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onHide}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  )
};

CreateReminderModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  createReminder: PropTypes.func.isRequired,
  show: PropTypes.bool
};

const mapDispatchToProps = {
  createReminder
};

export default connect(null, mapDispatchToProps)(CreateReminderModal);
