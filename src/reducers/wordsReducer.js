import words from '../fixtures/words.json';

const initialState = [...words];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    default: return state;
  }
}

