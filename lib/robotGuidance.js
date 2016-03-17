const processors = {
  N: processNorth,
  S: processSouth,
  E: processEast,
  W: processWest
};

module.exports = move;

function move(position, command) {
  'use strict';

  let processCommand = processors[position[2]];

  return processCommand(position.slice(0), command);
}

function processNorth(position, command) {
  if (command === 'F')
    position[1] = position[1] + 1;
  else if (command === 'R')
    position[2] = 'E';
  else if (command === 'L')
    position[2] = 'W';

  return position;
}

function processSouth(position, command) {
  if (command === 'F')
    position[1] = position[1] - 1;
  else if (command === 'R')
    position[2] = 'W';
  else if (command === 'L')
    position[2] = 'E';

  return position;
}

function processEast(position, command) {
  if (command === 'F')
    position[0] = position[0] + 1;
  else if (command === 'R')
    position[2] = 'S';
  else if (command === 'L')
    position[2] = 'N';

  return position;
}

function processWest(position, command) {
  if (command === 'F')
    position[0] = position[0] - 1;
  else if (command === 'R')
    position[2] = 'N';
  else if (command === 'L')
    position[2] = 'S';

  return position;
}
