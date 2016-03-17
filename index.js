'use strict';

const missionData = require('./data/mars.json');
const missionFactory = require('./lib/missionFactory');

const mission = missionFactory(missionData.bounds, missionData.expeditions);
const reports = mission.launch();

console.log('Mission to '+ missionData.name +' results:');

reports.forEach((report) => {
  console.log(report.position.join(' '), report.status || '');
});
