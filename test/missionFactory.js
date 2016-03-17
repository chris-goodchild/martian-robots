const expect = require('chai').expect;
const missionData = require('../data/mars.json');
const missionFactory = require('../lib/missionFactory');

describe('Mission Factory', function() {
  'use strict';

  it('returns a report for each expedition', function() {
    let mission = missionFactory(missionData.bounds, missionData.expeditions);
    let reports = mission.launch();

    expect(reports).to.deep.equal([
      { position: [1, 1, 'E'] },
      { position: [3, 3, 'N'], status: 'LOST' },
      { position: [3, 3, 'N'], status: 'LOST' },
    ])
  });
});
