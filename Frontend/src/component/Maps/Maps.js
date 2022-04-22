import {Map,GoogleApiWrapper} from 'google-maps-react';

import React, { Component } from 'react'



 class MapContainer extends Component {

  render() {

    return (

        <Map

        google={this.props.google}

        style = {{width: '100%', height: '100%'}}

        zoom = {10}

        initialCenter= {

            {

            "lat": 20.2961,
            
            "lng": 85.8245,
            
        }

        }

        />

    );

  }

}



export default GoogleApiWrapper({

    apiKey:"AIzaSyBuc5GLthmk0WfzL2FNXoGt5osSR_ad1MQ"

})(MapContainer)