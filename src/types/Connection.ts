export interface Connection {
  fromId: string; // Out node
  toId: string; // In node
}

export interface ConnectionMap {
  [key: string]: {
    fromId: string;
    toId: string;
  };
}
