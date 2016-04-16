import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

// action creator
import {fetchPosts} from '../actions/index';


class PostsIndex extends Component {
    constructor(props, context) {
        super(props);
        this.transitionTo = this.transitionTo.bind(this);
        this.renderBlogPosts = this.renderBlogPosts.bind(this);
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

    renderBlogPosts() {
        return this.props.posts.map((post) => {
            return (
                <li key={post.id} className="list-group-item">
                    <span className="pull-xs-right">{post.categories}</span>
                    <strong>{post.title}</strong>
                </li>
            );
        });
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
                {this.renderBlogPosts()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts.all
    }
}

// import {bindActionCreators} from 'redux';
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
// }

// Note how above, by using the ES6 shortcut below, we can avoid boilerplate

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
