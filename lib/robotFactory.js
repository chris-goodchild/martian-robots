const move = require('./robotGuidance');

module.exports = robotFactory;

function robotFactory(startPosition, bounds, scents) {
  'use strict';

  function isLost(position) {
    let isOffLowerBounds = position[0] < 0 || position[1] < 0;
    let isOffUpperBounds = bounds && (position[0] > bounds[0] || position[1] > bounds[1]);
    return isOffLowerBounds || isOffUpperBounds;
  }

  function hasScent(position) {
    return scents && scents.some((scent) => {
      if (scent[2] !== position[2])
        return false;
      else if (position[0] > scent[0] || position[1] > scent[1])
        return true;
    });
  }

  function execute(commands) {
    let report = {
      position: startPosition || [0, 0, 'N']
    };

    if (!Array.isArray(commands) || !commands.length) {
      return report;
    }

    for (let i = 0; i < commands.length; i++) {
      let nextPosition = move(report.position, commands[i]);

      if (hasScent(nextPosition)) continue;

      if (isLost(nextPosition)) {
        report.status = 'LOST';
        break;
      }

      report.position = nextPosition;
    }

    return report;
  }

  return {
    execute: execute
  };
}
