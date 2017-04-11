import React, { Component } from 'react';
import { connect }          from 'react-redux';

/* component styles */
import { styles } from './styles.scss';

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles}>
        <table>
          <tr>
            <th>Route</th>
            <th>Buses on Route</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default connect(null, null)(Routes);