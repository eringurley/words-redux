import words from '../fixtures/words.json';

const initialState = {
  words: [...words]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default: return state;
  }
}

