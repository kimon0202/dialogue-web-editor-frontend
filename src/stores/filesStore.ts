import { action, observable } from 'mobx';

import { RootStore } from '.';
import { FileData } from '../types/FileData';

class FilesStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable file: FileData = {} as FileData;
  @observable loadFileModal = false;

  @action
  public setModal(state: boolean) {
    this.loadFileModal = state;
  }

  @action
  public loadFileContent() {
    if (!this.file) {
      return;
    }

    this.rootStore.nodesStore.nodes = this.file.nodes;
    this.rootStore.connectionsStore.connections = this.file.connections;
  }
}

export default FilesStore;
