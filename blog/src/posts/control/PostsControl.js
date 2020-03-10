import { store,POST_CREATED } from "../../store.js";

export const savePost = (post) => { 
    console.log('processing', post);
    const postCopy = Object.assign({},post);
    store.dispatch({
        type: POST_CREATED,
        payload: postCopy
    });
}

