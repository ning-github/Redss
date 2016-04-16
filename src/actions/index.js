import axios from 'axios';

// constants
import {urls, actionTypes} from '../const/const';

export function fetchPosts() {
    return {
        type: actionTypes.FETCH_POSTS,
        payload: axios.get(urls.BLOG_POSTS)
    }
}

export function createNewPost(payload) {
    return {
        // type:
        // payload: axios.post 
    }
}
