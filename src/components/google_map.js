import React, { Component } from "react";

export default class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, 
            {
                center: {
                    lat: this.props.lat, 
                    lng: this.props.lng
                },
                zoom: 8
            }
        );
    }

    render() {
        // We are using ref (reference) system. The ref system allows us to get a direct
        // reference to an HTML element that has been rendered to the page. So after this
        // component has been rendered to the screen, we can get a direct reference to the
        // div by refering to : 
        // this.refs.map
        return <div ref="map"></div>
    }
}