// //Local server
// const IP = "localhost";
// const PORT = 50541;
//LHL Server
const IP = '165.227.47.243';
const PORT = 50541;

const NAME = 'JA';

const INPUTS =  {
  // Move with WASD
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  //Move with arrow keys
  '\u001B\u005B\u0041': 'Move: up',
  '\u001B\u005B\u0044': 'Move: left',
  '\u001B\u005B\u0042': 'Move: down',
  '\u001B\u005B\u0043': 'Move: right',
  // Send messages
  0: 'Say: Hi',
  1: 'Say: Welcome!',
  2: 'Say: Sup?',
  3: 'Say: nm',
  4: 'Say: u?',
  5: 'Say: ????',
  6: 'Say: Good job!',
  7: 'Say: ☺️☺️☺️',
  8: 'Say: ✧･ﾟ: *✧･ﾟ:* ',
  9: 'Say: (┬┬_┬┬)',
};

module.exports = {
  IP,
  PORT,
  INPUTS,
  NAME,
};