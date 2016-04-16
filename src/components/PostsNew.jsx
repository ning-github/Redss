import React, { Component } from 'react';
// reduxForm is a special connect function that binds redux state to this component
import { reduxForm } from 'redux-form';

import {createNewPost} from '../actions/index';

class PostsNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <h3>Create a New Post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const fields = ['title', 'categories', 'content'];

export default reduxForm(
    form: "PostsNewForm",
    fields
)(PostsNew);

/*
    What this does is hook into redux state:

    state === {
        form: {
            PostsNewForm: {
                title: ,
                categories: ,
                content:
            }
        }
    }

*/
