import update from 'immutability-helper';
import { action, computed, decorate, observable } from 'mobx';

import { RootStore } from '.';
import { FileData } from '../types/FileData';
import { NodeMap } from '../types/Node';

interface ActiveNodeModal {
  id: string;
  mode: 'delete' | 'edit' | null;
}

class NodesStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  nodes: NodeMap = {
    'id:rootNode': {
      id: 'id:rootNode',
      left: 80,
      top: 20,
      dialogueType: undefined,
      text: '',
    },
  };

  public updateNodePosition(id: string, left: number, top: number) {
    this.nodes = update(this.nodes, {
      [id]: {
        $merge: { left, top },
      },
    });
  }

  public addNode(id: string, left: number, top: number) {
    const newNodes = update(this.nodes, {
      [id]: {
        $set: {
          left,
          top,
          id,
          dialogueType: undefined,
          text: '',
        },
      },
    });

    this.nodes = newNodes;
  }

  public deleteNode(id: string) {
    this.nodesKeys.forEach((key) => {
      if (key === id) {
        delete this.nodes[id];
      }
    });
  }

  public reset() {
    this.nodes = {
      'id:rootNode': {
        id: 'id:rootNode',
        left: 80,
        top: 20,
        dialogueType: undefined,
        text: '',
      },
    };
    this.rootStore.connectionsStore.connections = {};
    this.rootStore.filesStore.file = {} as FileData;
  }

  public get nodesKeys() {
    return Object.keys(this.nodes);
  }
}

decorate(NodesStore, {
  nodes: observable,
  updateNodePosition: action,
  addNode: action,
  reset: action,
  nodesKeys: computed,
});

export default NodesStore;
