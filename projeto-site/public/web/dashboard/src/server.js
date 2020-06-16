const app = require("./app");

const server = app.listen(3000);
console.log("Express started at port %s", server.address().port);