import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : "" };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState(
            {
                term : event.target.value
            }
        );
    }
    
    handleFormSubmit(event) {
        // This basically tells the browser that don't submit the form
        event.preventDefault();

        // We need to go and fetch weather forecast data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: "" });
    }

    render() {
        return (
            <form className="input-group" onSubmit={ this.handleFormSubmit }>
                <input 
                    placeholder="Get a 5 day forcast for the city you want to search"
                    className="form-control"
                    value={ this.state.term }
                    onChange={ this.handleInputChange } />
                <span className="input-group-button">
                    <button 
                        type="submit" 
                        className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

    // When we click ENTER or click Submit the url changes, and our
    // input cleared out (because we are using form element, so the browser
    // automatically thinks that we are making a post request)
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// No mapStateToProps, hence we pass null as first argument 
export default connect(null, mapDispatchToProps)(SearchBar);
