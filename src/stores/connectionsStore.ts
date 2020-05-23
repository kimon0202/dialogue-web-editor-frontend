import { action, observable } from 'mobx';

import { RootStore } from '.';
import { Connection } from '../types/Connection';

class ConnectionsStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable connections: Connection[] = [];

  @action
  public addConnection(fromId: string, toId: string) {
    for (let i = 0; i < this.connections.length; i += 1) {
      if (
        this.connections[i].fromId === fromId &&
        this.connections[i].toId === toId
      ) {
        return;
      }
    }

    this.connections.push({
      fromId,
      toId,
    });
  }
}

export default ConnectionsStore;
