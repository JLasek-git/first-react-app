import {connect} from 'react-redux';
import {
  getCardsFromUrl,
} from '../../../redux/cardsRedux';
import SearchResults from './SearchResults';


const mapStateToProps = state => ({
  cards: getCardsFromUrl(state, window.location.href.split('/')),
});




export default connect(mapStateToProps)(SearchResults);


