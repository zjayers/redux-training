// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './projects';

// DUCKS PATTERN
// export default function configureStore() {
//   return createStore(
//     reducer,
//     devToolsEnhancer({
//       trace: true,
//     })
//   );
// }

// REDUX TOOLKIT
export default () =>
  configureStore({
    reducer,
  });
