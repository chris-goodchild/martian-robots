'use strict';

const directions = ['N', 'E', 'S', 'W'];

module.exports = move;

function move(position, command) {
  let nextPosition = position.slice(0);

  if (command === 'F')
    return goTo(nextPosition);
  else
    return turn(nextPosition, command);
}

function goTo(position) {
  if (position[2] === 'N') position[1]++;
  if (position[2] === 'E') position[0]++;
  if (position[2] === 'S') position[1]--;
  if (position[2] === 'W') position[0]--;
  return position;
}

function turn(position, command) {
  let currentDirectionIndex = directions.indexOf(position[2]);

  if (command === 'L')
    position[2] = directions[(currentDirectionIndex + 4 - 1) % 4];
  if (command === 'R')
    position[2] = directions[(currentDirectionIndex + 1) % 4];

  return position;
}
