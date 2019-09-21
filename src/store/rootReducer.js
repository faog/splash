import { combineReducers } from 'redux';
import { imagesReducer, 
	loadingReducer, 
	errorReducer, 
	pageReducer,
  statsReducer } from '../components/ImageGrid/ImageGridRedux/reducers';

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	images: imagesReducer,
	error: errorReducer,
	nextPage: pageReducer,
	imageStats: statsReducer,
});

export default rootReducer;
