import update from 'immutability-helper';
import { action, decorate, observable } from 'mobx';

import { RootStore } from '.';
import { Connection } from '../types/Connection';

class ConnectionsStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  connections: Connection[] = [];

  public addConnection(fromId: string, toId: string) {
    for (let i = 0; i < this.connections.length; i += 1) {
      if (
        this.connections[i].fromId === fromId &&
        this.connections[i].toId === toId
      ) {
        return;
      }
    }

    const temp = update(this.connections, {
      $push: [{ fromId, toId }],
    });

    this.connections = temp;
  }
}

decorate(ConnectionsStore, {
  connections: observable,
  addConnection: action,
});

export default ConnectionsStore;
