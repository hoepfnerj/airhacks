
import { posts } from "./posts/entity/PostsReducer.js";
import { createStore,combineReducers } from "./lib/redux.js";

const root = combineReducers({posts});


export const store = createStore(root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

