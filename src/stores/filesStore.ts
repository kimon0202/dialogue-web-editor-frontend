import { observable } from 'mobx';

import { RootStore } from '.';
import { FileData } from '../types/FileData';

class FilesStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable file: FileData = {} as FileData;
}

export default FilesStore;
