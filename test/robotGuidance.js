const expect = require('chai').expect;
const move = require('../lib/robotGuidance');

describe('Robot Guidance', function() {
  'use strict';

  let position;

  beforeEach(function() {
    position = [2, 2];
  });

  describe('when facing North', function() {
    beforeEach(function() {
      position.push('N');
    });

    it('increases its Y position by 1 for the "F" command', function() {
      let newPosition = move(position, 'F');

      expect(newPosition).to.deep.equal([2, 3, 'N']);
    });

    it('changes its direction to East for the "R" command', function() {
      let newPosition = move(position, 'R');

      expect(newPosition).to.deep.equal([2, 2, 'E']);
    });

    it('changes its direction to West for the "L" command', function() {
      let newPosition = move(position, 'L');

      expect(newPosition).to.deep.equal([2, 2, 'W']);
    });
  });

  describe('when facing South', function() {
    beforeEach(function() {
      position.push('S');
    });

    it('decreases its Y position by 1 for the "F" command', function() {
      let newPosition = move(position, 'F');

      expect(newPosition).to.deep.equal([2, 1, 'S']);
    });

    it('changes its direction to West for the "R" command', function() {
      let newPosition = move(position, 'R');

      expect(newPosition).to.deep.equal([2, 2, 'W']);
    });

    it('changes its direction to East for the "L" command', function() {
      let newPosition = move(position, 'L');

      expect(newPosition).to.deep.equal([2, 2, 'E']);
    });
  });

  describe('when facing East', function() {
    beforeEach(function() {
      position.push('E');
    });

    it('increases its X position by 1 for the "F" command', function() {
      let newPosition = move(position, 'F');

      expect(newPosition).to.deep.equal([3, 2, 'E']);
    });

    it('changes its direction to South for the "R" command', function() {
      let newPosition = move(position, 'R');

      expect(newPosition).to.deep.equal([2, 2, 'S']);
    });

    it('changes its direction to North for the "L" command', function() {
      let newPosition = move(position, 'L');

      expect(newPosition).to.deep.equal([2, 2, 'N']);
    });
  });

  describe('when facing West', function() {
    beforeEach(function() {
      position.push('W');
    });

    it('decreases its X position by 1 for the "F" command', function() {
      let newPosition = move(position, 'F');

      expect(newPosition).to.deep.equal([1, 2, 'W']);
    });

    it('changes its direction to North for the "R" command', function() {
      let newPosition = move(position, 'R');

      expect(newPosition).to.deep.equal([2, 2, 'N']);
    });

    it('changes its direction to South for the "L" command', function() {
      let newPosition = move(position, 'L');

      expect(newPosition).to.deep.equal([2, 2, 'S']);
    });
  });

});
