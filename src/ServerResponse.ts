declare const jest: any;

/*
  Event: 'close'
  Event: 'finish'
  response.addTrailers(headers)
  response.connection
  response.end([data][, encoding][, callback])
  response.finished
  response.getHeader(name)
  response.getHeaderNames()
  response.getHeaders()
  response.hasHeader(name)
  response.headersSent
  response.removeHeader(name)
  response.sendDate
  response.setHeader(name, value)
  response.setTimeout(msecs[, callback])
  response.socket
  response.statusCode
  response.statusMessage
  response.write(chunk[, encoding][, callback])
  response.writeContinue()
  response.writeHead(statusCode[, statusMessage][, headers])
 */

export class ServerResponse {
  public addTrailers: any;
  public connection: any;
  public end: any;
  public finished: any;
  public getHeader: any;
  public getHeaderNames: any;
  public getHeaders: any;
  public hasHeader: any;
  public headersSent: any;
  public removeHeader: any;
  public sendDate: any;

  constructor() {
    this.addTrailers = jest.fn();
    this.connection = jest.fn();
    this.end = jest.fn();
    this.finished = jest.fn();
    this.getHeader = jest.fn();
    this.getHeaderNames = jest.fn();
    this.getHeaders = jest.fn();
    this.hasHeader = jest.fn();
    this.headersSent = jest.fn();
    this.removeHeader = jest.fn();
    this.sendDate = jest.fn();
    return this;
  }

  public resetMocked() {
    this.addTrailers.mockReset();
    this.connection.mockReset();
    this.end.mockReset();
    this.finished.mockReset();
    this.getHeader.mockReset();
    this.getHeaderNames.mockReset();
    this.getHeaders.mockReset();
    this.hasHeader.mockReset();
    this.headersSent.mockReset();
    this.removeHeader.mockReset();
    this.sendDate.mockReset();
  }
}
