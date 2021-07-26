import {connect} from 'react-redux';
import {
  getCardsFromSearchString,
} from '../../../redux/cardsRedux';
import SearchResults from './SearchResults';


const mapStateToProps = state => ({
  cards: getCardsFromSearchString(state, window.location.href.split('/')),
});




export default connect(mapStateToProps)(SearchResults);


