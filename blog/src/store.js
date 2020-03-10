
import { createStore } from "./lib/redux.js";

export const POST_CREATED = 'POST_CREATED';

const root = (state = {posts:[]}, action) => { 
    const { type, payload = {} } = action;

    switch (type) { 
        case POST_CREATED:
            return {
            posts: state.posts.concat(payload)
        }

    }
    return state;

}
export const store = createStore(root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

