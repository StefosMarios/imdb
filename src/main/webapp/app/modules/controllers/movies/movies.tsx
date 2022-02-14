import './movies.scss';
import React from 'react';
import { Row, Col } from 'reactstrap';
import MovieCollection from 'app/modules/components/movie-list/movie-collection';

export const Movies = () => {
  return (
    <Row>
      <Col>
        <MovieCollection />
      </Col>
    </Row>
  );
};

export default Movies;
