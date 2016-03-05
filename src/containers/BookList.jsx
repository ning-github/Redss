import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import selectBook from '../actions/index.js';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={()=>{this.props.selectBook(book)}}
                    key={book.title}
                    className="list-group-item">{book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

/* ensures that app state becomes this componeont's props
    - invocation returns app state as props to BookList
*/
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

/* ensures that the action-creator function selectBook is bound to this.props.selectBook
    - dispatch is a callback function that is called using the selectBook action-creator
        - makes the return value of this.props.selectBook available to ALL reducers
    ultimately, this.props.selectBook invocation will change app state, and therefore props of BookList
    */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

/* makes BookList a container component (smart)
    - makes app state availabe as props
    - makes this.props.selectBook available on BookList component instances
*/
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
