import React from 'react';
import { Component } from 'react';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
  render() {
    return (
        <div>
            <BookList />
            <BookDetail />
            <div>Web servers generally manage static content and only http requests</div>
            <div>App servers can handle http AND other kinds of network protocols (managing API requests and so on)</div>
            <div>Changed component names to caps and gave .jsx extensions </div>
        </div>
    );
  }
}
