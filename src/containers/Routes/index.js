import React, { Component } from 'react';
import { connect }          from 'react-redux';

/* component styles */
import { styles } from './styles.scss';

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  displayRoutes() {
    const { routes } = this.props.route;

    debugger;

    // return routes.map((item) => {
      // debugger;
      // Object.keys(item).forEach(function(key,index) {
      //   console.log('the key is' ,key);
      //   // return (<tr>{item.route}</tr>);
      // });
      
    // });

    for(key in routes) {
      debugger;
    }

    return routesList;

  }

  render() {
    const routes = this.displayRoutes();

    return (
      <div className={styles}>
        <table>
          <tr>
            <th>Route</th>
            <th>Buses on Route</th>
          </tr>
          <tbody>
            {routes}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.route
  };
}

export default connect(mapStateToProps)(Routes);