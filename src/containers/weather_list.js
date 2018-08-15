import React, { Component } from "react";
import { connect } from "react-redux";

import GoogleMap from "../components/google_map";
import Chart from "../components/chart";

class WeatherList extends Component {
    renderWeatherData(cityData) {
        const cityName = cityData.city.name;
        const tempArr = cityData.list.map((weather) => weather.main.temp );
        const pressureArr = cityData.list.map((weather) => weather.main.pressure );
        const humidityArr = cityData.list.map((weather) => weather.main.humidity );
        // const lat= cityData.city.coord.lat; 
        // const lng= cityData.city.coord.lon;
        const { lat, lon } = cityData.city.coord;

        console.log(tempArr);
        // Add size of google map in css file
        return (
            <tr key={ cityName }>
                <td><GoogleMap lat={ lat } lng={ lon } /></td>
                <td className="img-fluid">
                    <Chart data={ tempArr } color={ "orange" } unit={ "K" } />
                </td>
                <td className="img-fluid">
                    <Chart data={ pressureArr } color={ "green" } unit={ "hPa" } />
                </td>
                <td className="img-fluid">
                    <Chart data={ humidityArr } color={ "black" } unit={ "%" } />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeatherData) }
                </tbody>
            </table>
        );
    }
}

/*
function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}
*/


// es6 code
// -------------------------------------------
// functionmapStateToProps(state) {
//      return { weather: state.weather };   
// } 
//                  ===
// function mapStateToProps({ weather }) { 
//      return { weather };
// } 
// -------------------------------------------

function mapStateToProps({ weather }) {
    return { weather };
}


export default connect(mapStateToProps)(WeatherList);