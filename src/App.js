import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import React from 'react';
import Movies from './movies/Movies';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Movies />
      </Container>
    </Provider>
  );
}

export default App;
