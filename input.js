const { INPUTS } = require('./constants');

let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // Exit with ^C
  if (key === '\u0003') {
    process.exit();
  }
  if (INPUTS[key]) {
    connection.write(INPUTS[key]);
  }
};

module.exports = { setupInput };