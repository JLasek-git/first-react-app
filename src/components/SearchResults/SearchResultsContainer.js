import {connect} from 'react-redux';
import {
  getCardsForSearchResult,
} from '../../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => ({

  cards: getCardsForSearchResult(state, props.match.params.title),

});




export default connect(mapStateToProps)(SearchResults);


