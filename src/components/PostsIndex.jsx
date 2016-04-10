import React, {Component} from 'react';
import {connect} from 'react-redux';

// action creator stuff
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';


class PostsIndex extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
