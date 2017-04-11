import constants from 'core/types';

const routeObj = {}

const initialState = {
	routes: []
};

export function routeReducer(state = initialState, action) {
  switch (action.type) {

  case constants.NEW_VEHICLE_POSITION:

  	const routeId = action.dataPoint.entity[0].vehicle.trip.route_id;
  	setBusCount(routeId);

  	const updatedRoutes = state.routes.slice();
    updatedRoutes.splice(0, 0, routeObj);

    return Object.assign({}, state, {
    	routes: updatedRoutes
    });

  default:
    return state;
  }
}


function setBusCount(routeId) {
	if(routeObj.hasOwnProperty(routeId)) {
		routeObj[routeId] = routeObj[routeId] + 1;
	} else {
		routeObj[routeId] = 1;
	}
}