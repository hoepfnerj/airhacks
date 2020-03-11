
import { postsReducer } from "./posts/entity/PostsReducer.js";
import { createStore,combineReducers } from "./lib/redux.js";

const rootReducer = combineReducers({postStore: postsReducer});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

