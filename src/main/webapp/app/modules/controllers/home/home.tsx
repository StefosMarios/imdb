import './home.scss';
import React from 'react';
import { Row, Col } from 'reactstrap';
import OverviewCollection from 'app/modules/components/featured/overview-collection';

export const Home = () => {
  return (
    <Row>
      <Col>
        <OverviewCollection />
      </Col>
    </Row>
  );
};

export default Home;
