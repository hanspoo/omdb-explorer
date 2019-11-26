import axios from 'axios';

const INITIAL_STATE = {
  movies: null,
  loading: false,
  error: '',
};
const type = 'CARGAR_PELIS';
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${type}_PENDING`:
      return { loading: true };
    case `${type}_FULFILLED`:
      return { loading: false, movies: action.payload.data.Search };
    default:
      return state;
  }
};

const url = 'http://www.omdbapi.com';
const apiKey = process.env.REACT_APP_OMDB_KEY;

const cargarPeliculas = (s) => {
  const params = { apiKey, s };
  const payload = axios.get(url, { params });
  return { type, payload };
};

export { cargarPeliculas };
export default reducer;
