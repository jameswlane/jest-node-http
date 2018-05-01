declare const jest: any;

/*
  Event: 'abort'
  Event: 'connect'
  Event: 'continue'
  Event: 'response'
  Event: 'socket'
  Event: 'timeout'
  Event: 'upgrade'
  request.abort()
  request.aborted
  request.connection
  request.end([data[, encoding]][, callback])
  request.flushHeaders()
  request.getHeader(name)
  request.removeHeader(name)
  request.setHeader(name, value)
  request.setNoDelay([noDelay])
  request.setSocketKeepAlive([enable][, initialDelay])
  request.setTimeout(timeout[, callback])
  request.socket
  request.write(chunk[, encoding][, callback])
 */

export class ClientRequest {
  public abort: any;
  public aborted: any;
  public connection: any;
  public end: any;
  public flushHeaders: any;
  public getHeader: any;
  public removeHeader: any;
  public setHeader: any;
  public setNoDelay: any;
  public setSocketKeepAlive: any;
  public setTimeout: any;
  public socket: any;
  public write: any;

  constructor(options?: any, cb?: any) {
    this.abort = jest.fn();
    this.aborted = jest.fn();
    this.connection = jest.fn();
    this.end = jest.fn();
    this.flushHeaders = jest.fn();
    this.getHeader = jest.fn();
    this.removeHeader = jest.fn();
    this.setHeader = jest.fn();
    this.setNoDelay = jest.fn();
    this.setSocketKeepAlive = jest.fn();
    this.setTimeout = jest.fn();
    this.socket = jest.fn();
    this.write = jest.fn();
    return this;
  }

  public resetMocked() {
    this.abort.mockReset();
    this.aborted.mockReset();
    this.connection.mockReset();
    this.end.mockReset();
    this.flushHeaders.mockReset();
    this.getHeader.mockReset();
    this.removeHeader.mockReset();
    this.setHeader.mockReset();
    this.setNoDelay.mockReset();
    this.setSocketKeepAlive.mockReset();
    this.setTimeout.mockReset();
    this.socket.mockReset();
    this.write.mockReset();
  }
}
