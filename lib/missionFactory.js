const robotFactory = require('./robotFactory');

module.exports = missionFactory;

function missionFactory(bounds, expeditions) {
  'use strict';

  function launch() {
    return expeditions.map(function(expedition) {
      let robot = robotFactory(expedition.position, bounds);
      return robot.execute(expedition.commands);
    });
  }

  return {
    launch: launch
  };
}
