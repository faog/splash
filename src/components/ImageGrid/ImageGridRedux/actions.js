import { IMAGES, STATS } from './actionTypes';

// Actions para carga de imágenes
const loadImages = () => ({
	type: IMAGES.LOAD,
});

const setImages = images => ({
	type: IMAGES.LOAD_SUCCESS,
	images,
});

const setError = error => ({
	type: IMAGES.LOAD_FAIL,
	error,
});

// Actions para estadistica de las imagenes
const loadImagesStats = id =>({
	type: STATS.LOAD,
	id,
})

const setImagesStats = (id, download) =>({
	type:STATS.LOAD_SUCCESS,
	id,
	download,
})

const setErrorStats = id =>({
	type: STATS.LOAD_FAIL,
	id,
})

export { 
	loadImages, 
	setImages, 
	setError,
	loadImagesStats, 
	setImagesStats, 
	setErrorStats
};
