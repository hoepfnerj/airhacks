import { store } from "../../store.js";
import { POST_CREATED } from "../entity/PostsReducer.js";

const started = () => { 

}

const finishied = () => { }


export const savePost = (post) => { 
    console.log('processing', post);
    const postCopy = Object.assign({}, post);
    started();
    finishied();
    store.dispatch({
        type: POST_CREATED,
        payload: postCopy
    });
}

