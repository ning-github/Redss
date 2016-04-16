import React, { Component } from 'react';
import { connect } from 'react-redux';

import {createNewPost} from '../actions/index';

class PostsNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props: ', this.props);
        return (
            <div>

                I am new post lol
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

export default connect(mapStateToProps, {createNewPost})(PostsNew);
