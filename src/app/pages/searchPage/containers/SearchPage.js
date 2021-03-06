import { connect } from 'react-redux';
import SearchPage from '../components/SearchPage';
import { getSearchResults, getSearchError } from '../../../components/searchbar/selectors';

const mapStateToProps = (state) => ({
  searchResults: getSearchResults(state),
  searchError: getSearchError(state),
});

export default connect(
  mapStateToProps,
  null,
)(SearchPage);
