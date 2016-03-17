const robotFactory = require('./robotFactory');

module.exports = missionFactory;

function missionFactory(bounds, expeditions) {
  'use strict';

  function launch() {
    let scents = [];

    return expeditions.map((expedition) => {
      let robot = robotFactory(expedition.position, bounds, scents);
      let report = robot.execute(expedition.commands);

      if (report.status) {
        scents.push(report.position);
      }

      return report;
    });
  }

  return {
    launch: launch
  };
}
