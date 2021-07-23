import {connect} from 'react-redux';
import { getCardsFromSearchString } from '../../../redux/columnsRedux';
import SearchResults from './SearchResults';


const mapStateToProps = state => ({
  cards: getCardsFromSearchString(state),
});




export default connect(mapStateToProps)(SearchResults);