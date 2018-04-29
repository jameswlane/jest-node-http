declare const jest: any;

/*
  Event: 'aborted'
  Event: 'close'
  message.destroy([error])
  message.headers
  message.httpVersion
  message.method
  message.rawHeaders
  message.rawTrailers
  message.setTimeout(msecs, callback)
  message.socket
  message.statusCode
  message.statusMessage
  message.trailers
  message.url
 */

export class IncomingMessage {
  public destroy: any;
  public headers: any;
  public httpVersion: any;
  public method: any;
  public rawHeaders: any;
  public rawTrailers: any;
  public setTimeout: any;
  public socket: any;
  public statusCode: any;
  public statusMessage: any;
  public trailers: any;
  public url: any;

  constructor() {
    this.destroy = jest.fn();
    this.headers = jest.fn();
    this.httpVersion = jest.fn();
    this.method = jest.fn();
    this.rawHeaders = jest.fn();
    this.rawTrailers = jest.fn();
    this.setTimeout = jest.fn();
    this.socket = jest.fn();
    this.statusCode = jest.fn();
    this.statusMessage = jest.fn();
    this.trailers = jest.fn();
    this.url = jest.fn();
    return this;
  }

  public resetMocked() {
    this.destroy.mockReset();
    this.headers.mockReset();
    this.httpVersion.mockReset();
    this.method.mockReset();
    this.rawHeaders.mockReset();
    this.rawTrailers.mockReset();
    this.setTimeout.mockReset();
    this.socket.mockReset();
    this.statusCode.mockReset();
    this.statusMessage.mockReset();
    this.trailers.mockReset();
    this.url.mockReset();
  }
}
