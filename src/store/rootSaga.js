import { all } from 'redux-saga/effects';
import imageSaga from '../components/ImageGrid/ImageGridRedux/imageSaga';
import statsSaga from '../components/ImageGrid/ImageGridRedux/statsSaga';

export default function* rootSaga(){
  yield all([
    imageSaga(),
    statsSaga(),
  ]);
}
