const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: JA');

    setInterval(() => {
      conn.write('Move: up');
      conn.write('Move: left');
    }, 50)
    setTimeout(() => conn.write('Move: up'), 10);
    setTimeout(() => conn.write('Move: left'), 10);
    setTimeout(() => conn.write('Move: up'), 20);
    setTimeout(() => conn.write('Move: left'), 20);
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

module.exports =  {
  connect,
}
console.log("Connecting ...");
connect();