import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchCurrentPost, deletePost, clearCurr } from '../actions/index';

class PostShow extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    }

    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount() {
        this.props.fetchCurrentPost(this.props.params);
    }

    componentWillUnmount() {
        this.props.clearCurr();
    }

    onDelete() {
        this.props.deletePost(this.props.params)
            .then(() => {
                this.context.router.push("/");
            });
    }

    render() {
        if (!this.props.currentPost) {
            return <div>Loading...</div>
        }

        const {title, categories, content} = this.props.currentPost;

        return (
            <div>
                <Link to="/">  {"<"} Back to List </Link>
                <h3>{title}</h3>
                <h6>Categories: {categories}</h6>
                <p>{content}</p>
                <div className="btn btn-danger" onClick={this.onDelete}>Delete Post</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentPost: state.posts.currentPost
    }
}

export default connect(mapStateToProps, { fetchCurrentPost, deletePost, clearCurr })(PostShow);
