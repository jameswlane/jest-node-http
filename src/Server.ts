declare const jest: any;

/*
  Event: 'checkContinue'
  Event: 'checkExpectation'
  Event: 'clientError'
  Event: 'close'
  Event: 'connect'
  Event: 'connection'
  Event: 'request'
  Event: 'upgrade'
  server.close([callback])
  server.listen()
  server.listening
  server.maxHeadersCount
  server.setTimeout([msecs][, callback])
  server.timeout
  server.keepAliveTimeout
 */

export class Server {
  public close: any;
  public listen: any;
  public listening: any;
  public maxHeadersCount: any;
  public setTimeout: any;
  public timeout: any;
  public keepAliveTimeout: any;

  constructor(opts: any, requestListener: any) {
    this.close = jest.fn();
    this.listen = jest.fn();
    this.listening = jest.fn();
    this.maxHeadersCount = jest.fn();
    this.setTimeout = jest.fn();
    this.timeout = jest.fn();
    this.keepAliveTimeout = jest.fn();
    return this;
  }

  public resetMocked() {
    this.close.mockReset();
    this.listen.mockReset();
    this.listening.mockReset();
    this.maxHeadersCount.mockReset();
    this.setTimeout.mockReset();
    this.timeout.mockReset();
    this.keepAliveTimeout.mockReset();
  }
}
