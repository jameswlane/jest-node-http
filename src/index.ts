import { Agent, globalAgent } from './Agent';
import { ClientRequest } from './ClientRequest';
import { IncomingMessage } from './IncomingMessage';
import { METHODS } from './Methods';
import { Server } from './Server';
import { ServerResponse } from './ServerResponse';
import { STATUS_CODES } from './StatusCodes';

function createServer(opts: any, requestListener: any) {
  return new Server(opts, requestListener);
}

function request(options: any, cb: any) {
  return new ClientRequest(options, cb);
}

function get(options: any, cb: any) {
  const req = request(options, cb);
  req.end();
  return req;
}

module.exports = {
  Agent,
  ClientRequest,
  IncomingMessage,
  METHODS,
  STATUS_CODES,
  Server,
  ServerResponse,
  createServer,
  get,
  globalAgent,
  request,
};
