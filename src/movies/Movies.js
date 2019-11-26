import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf, shape, string, bool, func,
} from 'prop-types';
import { cargarPeliculas } from '../redux/reducer';
import Resultados from './Resultados';
import SearchBar from './SearchBar';

function Movies(props) {
  function onSearch(s) {
    props.cargarPelis(s);
  }

  const { movies, loading } = props;

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {loading && <p>Cargando...</p>}
      {movies && <Resultados movies={movies} />}
    </>
  );
}

Movies.propTypes = {
  movies: arrayOf(shape({ Title: string })),
  loading: bool,
  cargarPelis: func,
};

const s2p = (state) => {
  const { movies, loading } = state;
  return {
    movies,
    loading,
  };
};

const d2p = (dispatch) => ({
  cargarPelis: (s) => dispatch(cargarPeliculas(s)),
});
export default connect(
  s2p,
  d2p,
)(Movies);
