const uWS = require('uWebSockets.js');
const port = 3000;

/* ./quiche-client --no-verify https://localhost:9001 */

/* The only difference here is that we use uWS.H3App rather than uWS.App or uWS.SSLApp.
 * And of course, there are no WebSockets in HTTP/3 only WebTransport (coming) */

const app = uWS.App().get('/', (res, req) => {
  res.end('Hello Uwebsocket!');
}).listen(port, (token) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});
