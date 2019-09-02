import React from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { getScreen } from '../../utils/utils';

const SideBar = ({ location, history }) => {
  let screen = getScreen(location.pathname);
  screen = screen ? screen : 'overview';

  const handleSelect = key => {
    switch (key) {
      case 'overview':
        history.push('/app');
        break;

      case 'courses':
        history.push('/app/courses');
        break;

      default:
        break;
    }
  };

  return (
    <Nav variant="pills" defaultActiveKey={screen} className="flex-column" onSelect={handleSelect}>
      <Nav.Link eventKey="overview">Overview</Nav.Link>
      <Nav.Link eventKey="courses">Courses</Nav.Link>
    </Nav>
  );
};

export default withRouter(SideBar);
