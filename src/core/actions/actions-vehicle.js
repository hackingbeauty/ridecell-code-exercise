import constants from 'core/types';

/**
 * addNewPosition - Add new position
 */
export function addNewPosition(dataPoint) {
  return {
    type     : constants.NEW_VEHICLE_POSITION,
    dataPoint: dataPoint
  };
}

