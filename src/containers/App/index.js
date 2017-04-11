import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import { bindActionCreators }   from 'redux';
import injectTapEventPlugin    from 'react-tap-event-plugin';
import getMuiTheme             from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider        from 'material-ui/styles/MuiThemeProvider';
import RTM                     from 'satori-sdk-js';


// global styles for entire app
import './styles/app.scss';

/* application components */
import Header     from 'containers/Header';
import Routes     from 'containers/Routes';
import Map        from 'containers/Map';

/* actions */
import * as vehicleActionCreators from 'core/actions/actions-vehicle';

injectTapEventPlugin();

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { addNewPosition } = this.props.actions.vehicle;
    const endpoint = "wss://open-data.api.satori.com";
    const appKey = "fFd6f4fEDa8Ab6cD52c2FEBdc05F5ADE";
    const channel = "transportation";
    const rtm = new RTM(endpoint, appKey);
    const filter = { filter: "select * from `transportation` where header.`user-data`='trimet'" };

    rtm.on("enter-connected", function() {
      console.log("Connected to RTM!");
    });

    const subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE, filter);
    subscription.on('rtm/subscription/data', function (pdu) {
      pdu.body.messages.forEach(function (msg) {
        addNewPosition(msg);
      });
    });

    rtm.start();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header />
          <div className="left-pane">
            <Routes />
          </div>
          <div className="right-pane">
            <Map />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      vehicle : bindActionCreators(vehicleActionCreators, dispatch)
    }
  };
}


export default connect(null, mapDispatchToProps)(App);