import { all } from 'redux-saga/effects';
import imageSaga from '../components/ImageGrid/ImageGridRedux/imageSaga'


export default function* rootSaga(){
  yield all([
    imageSaga(),
  ]);
}
