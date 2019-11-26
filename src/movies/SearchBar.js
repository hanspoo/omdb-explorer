import { Form } from 'react-bootstrap';
import { func } from 'prop-types';
import { debounce } from 'lodash';
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const debouncedSearch = debounce(onSearch, 1000);

  return (
    <Form.Control
      placeholder="Buscar películas..."
      onChange={(e) => debouncedSearch(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  onSearch: func.isRequired,
};
export default SearchBar;
