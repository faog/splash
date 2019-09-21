import { combineReducers } from 'redux';
import { imagesReducer, loadingReducer, errorReducer, pageReducer } from '../components/ImageGrid/ImageGridRedux/reducers';

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	images: imagesReducer,
	error: errorReducer,
	nextPage: pageReducer,
});

export default rootReducer;
