import React from 'react';
import { Spinner as BootStrapSpinner } from 'react-bootstrap';
import './spinner-component.scss';

const Spinner = () =>
  <div className="spinner-component"><BootStrapSpinner animation="grow" className="spinner" variant="primary" /></div>;

export default Spinner;
