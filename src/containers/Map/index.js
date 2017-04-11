import React, { Component } 				from 'react';
import { connect }          				from 'react-redux';
import GoogleMapReact               from 'google-map-react';

/* component styles */
import { styles } from './styles.scss';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div className={styles}>
    		<GoogleMapReact
    			defaultCenter={this.props.center}
    			defaultZoom={this.props.zoom}
    		/>
      </div>
    );
  }
}

export default connect(null, null)(Map);