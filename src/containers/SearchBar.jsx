import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fetchWeather from '../actions/index';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        // this binding for callback
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();

        // fire action creator to make api request
        this.props.fetchWeather(this.state.term);

        // clear input field
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Enter Search Here"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    className="form-control" />
                <span className="input-group-btn">
                    <button className="btn btn-primary">Submit</button>
                </span>

            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null because we don't need to mapStateToProps in this component. it never needs to pull data in.
export default connect(null, mapDispatchToProps)(SearchBar);
