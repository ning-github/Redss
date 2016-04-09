import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
}

// note that this incoming state is the Application State from Redux store in in rootReducer
function mapStateToProps(state){
    // here we map the React component's weather prop to the data from the Redux store
    return {weather: state.weather}
}

export default WeatherList;
