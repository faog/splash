import { IMAGES, STATS } from './actionTypes';

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

const pageReducer = (state = 1, action) => {
	switch (action.type){
		case IMAGES.LOAD_SUCCESS:
			return state +1;
		default:
			return state;
	}
}

const statsReducer = (state = {}, action)=>{
  switch (action.type){
    case STATS.LOAD:
      return {
        ...state,
        [action.id]:{
          isLoading:true,
          download:null, 
          error:false,
        },
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]:{
          isLoading:false,
          download:action.download,
          error:false,
        },
      };
    case STATS.LOAD_FAIL:
      return {
        ...state,
        [action.id]:{
          isLoading:false,
          download:null,
          error: true,
        },
      };
    default:
      return state
  }
}

export { 
	imagesReducer, 
	loadingReducer, 
	errorReducer, 
	pageReducer,
	statsReducer
};
