declare const jest: any;

export interface IAgentOptions {
  keepAlive?: boolean;
  keepAliveMsecs?: number;
  maxSockets?: number;
  maxFreeSockets?: number;
}

export interface IVoidMockInstance {
  (): void;

  mockReset: () => void;
}

/*
  agent.createConnection(options[, callback])
  agent.keepSocketAlive(socket)
  agent.reuseSocket(socket, request)
  agent.destroy()
  agent.getName(options)

  agent.freeSockets
  agent.requests
  agent.sockets
 */

export class Agent {
  public createConnection: any;
  public keepSocketAlive: any;
  public reuseSocket: any;
  public destroy: IVoidMockInstance;
  public getName: any;

  public freeSockets: any;
  public maxFreeSockets: number;
  public maxSockets: number;
  public requests: any;
  public sockets: any;

  private agentOptions: IAgentOptions;
  private keepAlive: boolean;
  private keepAliveMsecs: number;

  constructor(options?: IAgentOptions) {
    this.agentOptions = Object.assign({}, options);
    this.keepAliveMsecs = this.agentOptions.keepAliveMsecs || 1000;
    this.keepAlive = this.agentOptions.keepAlive || false;
    this.maxSockets = this.agentOptions.maxSockets || Infinity;
    this.maxFreeSockets = this.agentOptions.maxFreeSockets || 256;

    this.createConnection = jest.fn();
    this.keepSocketAlive = jest.fn();
    this.reuseSocket = jest.fn();
    this.destroy = jest.fn();
    this.getName = jest.fn();

    this.freeSockets = jest.fn();
    this.requests = jest.fn();
    this.sockets = jest.fn();
    return this;
  }

  public resetMocked() {
    this.createConnection.mockReset();
    this.keepSocketAlive.mockReset();
    this.reuseSocket.mockReset();
    this.destroy.mockReset();
    this.freeSockets.mockReset();
    this.getName.mockReset();
    this.requests.mockReset();
    this.sockets.mockReset();
  }
}

export const globalAgent = () => new Agent();
