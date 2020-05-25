import update from 'immutability-helper';
import { action, computed, decorate, observable } from 'mobx';

import { RootStore } from '.';
import { ConnectionMap } from '../types/Connection';

class ConnectionsStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  connections: ConnectionMap = {};

  public addConnection(fromId: string, toId: string) {
    const key = `${fromId}|${toId}`;

    const newMap = update(this.connections, {
      [key]: {
        $set: {
          fromId,
          toId,
        },
      },
    });

    this.connections = newMap;
  }

  public removeConnnection(id: string) {
    this.connectionsKeys.forEach((key) => {
      if (key.indexOf(id) !== -1) {
        delete this.connections[key];
      }
    });
  }

  public get connectionsKeys() {
    return Object.keys(this.connections);
  }
}

decorate(ConnectionsStore, {
  connections: observable,
  addConnection: action,
  removeConnnection: action,
  connectionsKeys: computed,
});

export default ConnectionsStore;
