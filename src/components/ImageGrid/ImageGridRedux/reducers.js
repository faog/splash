import { IMAGES } from './actionTypes';

const imagesReducer = (state = [], action) => {
	if (action.type === IMAGES.LOAD_SUCCESS) {
		return [...state, ...action.images]
	}
	return state;
}

const loadingReducer = (state = false, action) => {
  switch (action.type) {
		case IMAGES.LOAD:
			return true;
		case IMAGES.LOAD_SUCCESS:
			return false; 
		case IMAGES.LOAD_FAIL:
			return false;
		default:
			return state;
	}
}

const errorReducer = (state = null, action) => {
  switch (action.type) {
		case IMAGES.LOAD_FAIL:
			return action.error;
		case IMAGES.LOAD:
		case IMAGES.LOAD_SUCCESS:
			return null;
		default: 
			return state;
	}
}

export { imagesReducer, loadingReducer, errorReducer };
