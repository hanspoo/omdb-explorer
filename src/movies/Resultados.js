import { Col, Row } from 'react-bootstrap';
import React from 'react';

import { arrayOf, shape } from 'prop-types';

import Movie from './Movie';
import TipoMovie from './TipoMovie';

const Resultados = ({ movies }) => (
  <Row>
    {movies.map((movie) => (
      <Col key={movie.Title}>
        <Movie movie={movie} />
      </Col>
    ))}
  </Row>
);

Resultados.propTypes = {
  movies: arrayOf(shape(TipoMovie)),
};
export default Resultados;
