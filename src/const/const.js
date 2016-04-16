import {apiKey} from '../keys';

export const urls = {
    'BLOG_POSTS': `http://reduxblog.herokuapp.com/api/posts?key=${apiKey.blog}`,
    'BLOG_POST': `http://reduxblog.herokuapp.com/api/posts/:id?key=${apiKey.blog}`
}

export const actionTypes = {
    'FETCH_POSTS': 'FETCH_POSTS',
    'CREATE_NEW_POST': 'CREATE_NEW_POST',
    'FETCH_CURRENT_POST': 'FETCH_CURRENT_POST',
    'DELETE_POST': 'DELETE_POST',
    'CLEAR_CURR': 'CLEAR_CURR'
}
