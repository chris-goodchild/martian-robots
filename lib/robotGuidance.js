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
  if (position[2] === directions[0]) position[1]++;
  if (position[2] === directions[1]) position[0]++;
  if (position[2] === directions[2]) position[1]--;
  if (position[2] === directions[3]) position[0]--;
  return position;
}

function turn(position, command) {
  let directionIndex = directions.indexOf(position[2]);

  if (command === 'L')
    position[2] = directions[(directionIndex + directions.length - 1) % directions.length];
  if (command === 'R')
    position[2] = directions[(directionIndex + 1) % directions.length];

  return position;
}
