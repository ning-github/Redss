import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// action creator
import {fetchPosts} from '../actions/index';


class PostsIndex extends Component {
    constructor(props, context) {
        super(props);
        this.transitionTo = this.transitionTo.bind(this);
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    transitionTo() {
        this.context.router.push('/posts/new');
    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                {/*
                    // this is an example of navigating programmatically
                        - as opposed to declarative with <Link />
                    <div onClick={this.transitionTo}>
                    CLICK ME
                    </div>
                */}
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add Post
                    </Link>
                </div>
                List of Posts
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
