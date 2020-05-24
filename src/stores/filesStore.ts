import { action, decorate, observable } from 'mobx';

import { RootStore } from '.';
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

    this.rootStore.nodesStore.nodes = this.file.nodes;
    this.rootStore.connectionsStore.connections = this.file.connections;
  }
}

decorate(FilesStore, {
  file: observable,
  loadFileModal: observable,
  setModal: action,
  loadFileContent: action,
});

export default FilesStore;
