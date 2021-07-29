import {connect} from 'react-redux';
import {
  getCardsForSearchResult,
} from '../../../redux/cardsRedux';
import SearchResults from './SearchResults';


const mapStateToProps = (state) => ({
  cards: getCardsForSearchResult(state, window.location.href.split('/')),

});




export default connect(mapStateToProps)(SearchResults);


