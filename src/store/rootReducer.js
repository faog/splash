import { combineReducers } from 'redux';
import { imagesReducer, loadingReducer, errorReducer } from '../components/ImageGrid/ImageGridRedux/reducers';

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	images: imagesReducer,
	error: errorReducer,
});

export default rootReducer;
