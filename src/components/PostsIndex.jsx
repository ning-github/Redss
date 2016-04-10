import React, {Component} from 'react';
import {connect} from 'react-redux';

// action creator
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

// import {bindActionCreators} from 'redux';
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
// }

// Note how above, by using the ES6 shortcut below, we can avoid boilerplate

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
