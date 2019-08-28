import { connect } from 'react-redux';
import Words from '../../words/Words';
import { getTopWordsByTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = (state, props) => ({
  words: getTopWordsByTerm(state, props.count)
});

export default connect(
  mapStateToProps
)(Words);
