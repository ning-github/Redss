import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  contextTypes: {
    router: React.PropTypes.object
  }

  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}
