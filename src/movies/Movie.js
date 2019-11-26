import { Card } from 'react-bootstrap';
import React from 'react';

import { shape } from 'prop-types';

import TipoMovie from './TipoMovie';

export default function Movie({
  movie: {
    Title, Year, Poster, imdbID,
  },
}) {
  const url = `https://www.imdb.com/title/${imdbID}`;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{`Año ${Year}`}</Card.Text>
        <p>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            Ver en IMDB
          </a>
        </p>
      </Card.Body>
    </Card>
  );
}

Movie.propTypes = {
  movie: shape(TipoMovie),
};
