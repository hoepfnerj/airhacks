
export const POST_CREATED = 'POST_CREATED';
export const postsReducer = (state = { posts: [] }, action) => { 
    const { type, payload = {} } = action;
    switch (type) { 
        case POST_CREATED:
            return {
            posts: state.posts.concat(payload)
        }
    }
    return state;
}