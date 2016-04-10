import {apiKey} from '../keys';

export const urls = {
    'BLOG_POSTS': `http://reduxblog.herokuapp.com/api/posts?key=${apiKey.blog}`
}

export const actionTypes = {
    'FETCH_POSTS': 'FETCH_POSTS'
}
