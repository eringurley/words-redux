import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, handleOnChange }) {
  return (
    <input
      type='text'
      value={searchTerm}
      name='searchTerm'
      placeholder='Search'
      onChange={handleOnChange}
    />
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
};

export default SearchForm;
