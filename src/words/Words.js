import React from 'react';
import PropTypes from 'prop-types';

export default function Words({ words }) {
  const wordsList = words.map(word => (
    <li key={word}>{word}</li>
  ));

  return (
    <ul>
      {wordsList}
    </ul>
  );
  
} 

Words.propTypes = {
  words: PropTypes.array.isRequired
};
