import axios from 'axios';

// constants
import {urls, actionTypes} from '../const/const';

export function fetchPosts() {
    return {
        type: actionTypes.FETCH_POSTS,
        payload: axios.get(urls.BLOG_POSTS)
    }
}

export function createNewPost(props) {
    return {
        type: actionTypes.CREATE_NEW_POST,
        payload: axios.post(urls.BLOG_POSTS, props)
    }
}

export function fetchCurrentPost(props) {
    let requestUrl = urls.BLOG_POST.replace(':id', props.id);
    return {
        type: actionTypes.FETCH_CURRENT_POST,
        payload: axios.get(requestUrl)
    }
}

export function deletePost(props) {
    let requestUrl = urls.BLOG_POST.replace(':id', props.id);
    return {
        type: actionTypes.DELETE_POST,
        payload: axios.delete(requestUrl)
    }
}

export function clearCurr() {
    return {
        type: actionTypes.CLEAR_CURR
    }
}
