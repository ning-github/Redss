import React, { Component } from 'react';
import { connect } from 'react-redux';

import {createNewPost} from '../actions/index';

class PostsNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                Create Form
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
