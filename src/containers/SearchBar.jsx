import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        // this binding for callback
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Enter Search Here"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span>
                    <button>Submit</button>
                </span>

            </form>
        )
    }
}

export default SearchBar;
