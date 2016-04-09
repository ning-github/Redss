import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/Chart';
import CityMap from '../components/CityMap';


class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    renderWeather(cityData){
        const cityName = cityData.city.name;
        const {lat, lon} = cityData.city.coord;
        // const lat = cityData.city.coord.lat;
        // const lon = cityData.city.coord.lon;

        const temps = cityData.list.map(weather => {
            return weather.main.temp;
        });
        const pressure = cityData.list.map(weather => {
            return weather.main.pressure;
        });
        const humidity = cityData.list.map(weather => {
            return weather.main.humidity;
        });
        return (
            <tr key={cityName}>
                <td><CityMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="red" units="K"/></td>
                <td><Chart data={pressure} color="green" units="hPa"/></td>
                <td><Chart data={humidity} color="black" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
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

export default connect(mapStateToProps)(WeatherList);
