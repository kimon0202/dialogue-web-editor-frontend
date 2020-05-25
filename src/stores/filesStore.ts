import update from 'immutability-helper';
import { action, decorate, observable } from 'mobx';

import { RootStore } from '.';
import { ConnectionMap } from '../types/Connection';
import { FileData } from '../types/FileData';

class FilesStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  file: FileData = {} as FileData;
  loadFileModal = false;

  public setModal(state: boolean) {
    this.loadFileModal = state;
  }

  public loadFileContent() {
    if (!this.file) {
      return;
    }

    let connections: ConnectionMap = {};

    this.file.connections.forEach((connection) => {
      const key = `${connection.fromId}|${connection.toId}`;

      connections = update(connections, {
        [key]: {
          $set: {
            fromId: connection.fromId,
            toId: connection.toId,
          },
        },
      });
    });

    this.rootStore.nodesStore.nodes = this.file.nodes;
    this.rootStore.connectionsStore.connections = connections;
  }
}

decorate(FilesStore, {
  file: observable,
  loadFileModal: observable,
  setModal: action,
  loadFileContent: action,
});

export default FilesStore;
