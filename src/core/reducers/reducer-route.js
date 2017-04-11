import constants from 'core/types';

const initialState = {
	routes: []
};

export function routeReducer(state = initialState, action) {
  switch (action.type) {

  case constants.NEW_VEHICLE_POSITION:
  	const updatedRoutes = state.routes.slice();
    updatedRoutes.splice(0, 0, action.dataPoint);

    return Object.assign({}, state, {
    	routes: updatedRoutes
    });

  default:
    return state;
  }
}