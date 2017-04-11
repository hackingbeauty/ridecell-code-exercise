import { combineReducers } from 'redux';
import { uiReducer }       from 'core/reducers/reducer-ui';
import { vehicleReducer }  from 'core/reducers/reducer-vehicle';
import { routeReducer }    from 'core/reducers/reducer-route';

const rootReducer = combineReducers({
  ui 		: uiReducer,
  vehicle 	: vehicleReducer,
  route 	: routeReducer
});

export default rootReducer;
