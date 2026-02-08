const fnode = require("fnode_http");


function not_found() {
  return "not found";
}
/*
const routes = new Map([
  ["/", home],
  ["/data", data],
]);
*/
fnode.router((path) => {
  //const fn = routes.get(path);
  //return fn ? fn() : not_found();
  return "Hello Fnode!"
});

fnode.server("0.0.0.0:3000")
