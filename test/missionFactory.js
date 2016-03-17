const expect = require('chai').expect;
const missionData = require('./test.json');
const missionFactory = require('../lib/missionFactory');

describe('Mission Factory', function() {
  'use strict';

  it('returns a report for each expedition', function() {
    let mission = missionFactory(missionData[0].bounds, missionData[0].expeditions);
    let reports = mission.launch();

    expect(reports).to.deep.equal([
      { position: [1, 1, 'E'] },
      { position: [0, 1, 'S'] },
      { position: [2, 2, 'E'], status: 'LOST' }
    ])
  });

  describe('when a robot reports that it is "LOST"', function() {
    it('leaves a scent for other robots', function() {
      let mission = missionFactory(missionData[1].bounds, missionData[1].expeditions);
      let reports = mission.launch();

      expect(reports).to.deep.equal([
        { position: [1, 0, 'W'] },
        { position: [2, 2, 'N'], status: 'LOST' },
        { position: [1, 2, 'W'] }
      ])
    });
  });
});
