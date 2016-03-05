import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component {
    render() {
        // check for bootup, when there is no active book yet
        if (!this.props.activeBook) {
            return <div>Select a Book</div>
        }

        return (
            <div>
                <h3>Details for: </h3>
                <div>{this.props.activeBook.title}</div>
                <div>{this.props.activeBook.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {activeBook: state.activeBook};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
