import React, { Component } from 'react';
import { connect }          from 'react-redux';

/* component styles */
import { styles } from './styles.scss';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        
      </div>
    );
  }
}

export default connect(null, null)(Map);