import React, { Component } from 'react';
// reduxForm is a special connect function that binds redux state to this component
import { reduxForm } from 'redux-form';
// actionCreator to pass to handleSubmit of reduxForm
import {createNewPost} from '../actions/index';

/* reduxForm is a Higher Order Component
    - just like connect
    - and like connect works with mapDispatchToProps and mapStateToProps,
        reduxForm gives our wrapped component PostsNew some special functions
        as props
*/

class PostsNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // access reduxForm helpers are injected as props by HOC
        const {fields: {title, categories, content}, handleSubmit} = this.props;
        /* is the same as saying
            let title = this.props.fields.title;
            let handleSubmit = this.props.handleSubmit;
        */
        return (
            <form onSubmit={handleSubmit(this.props.createNewPost)}>
                {/* ^-- actionCreator mapped into props by reduxForm connector */}
                <h3>Create a New Post</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const fields = ['title', 'categories', 'content'];

// just like connect, reduxForm still accepts, in addition to config as 1st arg
//      mapStateToProps (for bringing redux state for prop population) and
//      mapDispatchToProps (for attaching actionCreators)

export default reduxForm({
    form: "PostsNewForm",
    fields
}, null, { createNewPost })(PostsNew);

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
