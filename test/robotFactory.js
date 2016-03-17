const expect = require('chai').expect;
const robotFactory = require('../lib/robotFactory');

describe('Robot Factory', function() {
  'use strict';

  describe('when no mission parameters or commands are supplied', function() {
    it('returns a default mission report', function() {
      let robot = robotFactory();
      let report = robot.execute();

      expect(report.position).to.deep.equal([0, 0, 'N']);
    });
  });

  describe('when mission paramaters but no commands are supplied', function() {
    it('reports its initial position', function() {
      let robot = robotFactory([3, 5, 'W']);
      let report = robot.execute();

      expect(report.position).to.deep.equal([3, 5, 'W']);
    });
  });

  describe('when a robot falls off the lowest X boundary', function() {
    it('marks its status as "LOST" and reports its last position', function() {
      let robot = robotFactory([1, 1, 'S']);
      let report = robot.execute(['R', 'F', 'F']);

      expect(report.status).to.equal('LOST');
      expect(report.position).to.deep.equal([0, 1, 'W']);
    });
  });

  describe('when a robot falls off the lowest Y boundary', function() {
    it('marks its status as "LOST" and reports its last position', function() {
      let robot = robotFactory([1, 1, 'S']);
      let report = robot.execute(['F', 'F']);

      expect(report.status).to.equal('LOST');
      expect(report.position).to.deep.equal([1, 0, 'S']);
    });
  });

  describe('when a robot falls off the highest X boundary', function() {
    it('marks its status as "LOST" and reports its last position', function() {
      let robot = robotFactory([1, 1, 'E'], [2, 2]);
      let report = robot.execute(['F', 'F']);

      expect(report.status).to.equal('LOST');
      expect(report.position).to.deep.equal([2, 1, 'E']);
    });
  });

  describe('when a robot falls off the highest Y boundary', function() {
    it('marks its status as "LOST" and reports its last position', function() {
      let robot = robotFactory([1, 1, 'N'], [2, 2]);
      let report = robot.execute(['F', 'F']);

      expect(report.status).to.equal('LOST');
      expect(report.position).to.deep.equal([1, 2, 'N']);
    });
  });

});
