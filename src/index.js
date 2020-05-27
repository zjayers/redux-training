import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import {
  projectAdded,
  projectRemoved,
  projectResolved,
} from './store/projects';

const store = configureStore();

// store.dispatch(bugAdded({ description: 'bug1' }));
// store.dispatch(bugAdded({ description: 'bug2' }));
// store.dispatch(bugAdded({ description: 'bug3' }));
// store.dispatch(bugResolved({ id: 1 }));

store.dispatch(projectAdded({ description: 'project1' }));
store.dispatch(projectAdded({ description: 'project2' }));
store.dispatch(projectAdded({ description: 'project3' }));
store.dispatch(projectResolved({ id: 1 }));

// import store from './customStore';
// import * as actions from './actions';

// store.subscribe(() => {
//   console.log('Store changed!');
// });
// store.dispatch(actions.bugAdded('Bug 1'));

// console.log(store.getState());
