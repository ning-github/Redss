import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostShow from './components/PostShow';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostShow} />
    </Route>
)
