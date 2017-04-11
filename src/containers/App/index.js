import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import injectTapEventPlugin    from 'react-tap-event-plugin';
import getMuiTheme             from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider        from 'material-ui/styles/MuiThemeProvider';
import RTM                     from 'satori-sdk-js';

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

  componentDidMount() {
    const endpoint = "wss://open-data.api.satori.com";
    const appKey = "fFd6f4fEDa8Ab6cD52c2FEBdc05F5ADE";
    const channel = "transportation";

    const rtm = new RTM(endpoint, appKey);
    rtm.on("enter-connected", function() {
      console.log("Connected to RTM!");
    });

    const subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE);
    subscription.on('rtm/subscription/data', function (pdu) {
      pdu.body.messages.forEach(function (msg) {
        // console.log(' yoyo ' + msg);
      });
    });

    rtm.start();
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