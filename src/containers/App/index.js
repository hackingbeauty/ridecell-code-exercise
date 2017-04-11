import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import injectTapEventPlugin    from 'react-tap-event-plugin';
import getMuiTheme             from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider        from 'material-ui/styles/MuiThemeProvider';

// global styles for entire app
import './styles/app.scss';

/* application components */
import Header     from 'containers/Header';
import LeftNavBar from 'containers/LeftNavBar';

injectTapEventPlugin();

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header />
          <div className="container">
            {this.props.children}
          </div>
          <LeftNavBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(null)(App);