import React, { Component } from 'react';
import { Link } from 'react-router';
// reduxForm is a special connect function that binds redux state to this component
import { reduxForm } from 'redux-form';
// actionCreator to pass to handleSubmit of reduxForm
import { createNewPost } from '../actions/index';

/* reduxForm is a Higher Order Component
    - just like connect
    - and like connect works with mapDispatchToProps and mapStateToProps,
        reduxForm gives our wrapped component PostsNew some special functions
        as props
*/

class PostsNew extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    // extract out submisssion to allow routing too
    onSubmit(props) {
        // call actionCreator (which returns a Promise with thenable)
        this.props.createNewPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        // access reduxForm helpers are injected as props by HOC
        const {fields: {title, categories, content}, handleSubmit} = this.props;
        /* is the same as saying
            let title = this.props.fields.title;
            let handleSubmit = this.props.handleSubmit;
        */
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                {/* ^-- actionCreator mapped into props by reduxForm connector */}
                <h3 style={{marginTop: '40px'}}>Create a New Post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : null}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : null}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : null}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

                <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
        )
    }
}

const fields = ['title', 'categories', 'content'];

// validation
function validate(values) {
    const errors = {};
    // title
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    // categories
    if (!values.categories) {
        errors.categories = 'Enter a category';
    }
    // title
    if (!values.content) {
        errors.content = 'Enter content';
    }

    return errors;
}

// just like connect, reduxForm still accepts, in addition to config as 1st arg
//      mapStateToProps (for bringing redux state for prop population) and
//      mapDispatchToProps (for attaching actionCreators)

export default reduxForm({
    form: "PostsNewForm",
    validate,
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
