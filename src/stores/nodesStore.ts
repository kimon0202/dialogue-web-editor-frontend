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
      inConnections: [],
      outConnections: [],
      text: '',
    },
  };

  activeNodeModal: ActiveNodeModal = {
    id: '',
    mode: null,
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
          inConnections: [],
          outConnections: [],
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

  public setActiveNode(id: string, mode: 'delete' | 'edit' | null) {
    this.activeNodeModal = {
      id,
      mode,
    };
  }

  public reset() {
    this.nodes = {
      'id:rootNode': {
        id: 'id:rootNode',
        left: 80,
        top: 20,
        dialogueType: undefined,
        inConnections: [],
        outConnections: [],
        text: '',
      },
    };
    this.rootStore.connectionsStore.connections = [];
    this.rootStore.filesStore.file = {} as FileData;
  }

  public get activeNode() {
    return this.nodes[this.activeNodeModal.id];
  }

  public get activeNodeOptions() {
    const opts = this.nodesKeys.filter((key) => key !== this.activeNode.id);
    const possibleOptions: { label: string; value: string }[] = [];

    opts.forEach((option) => {
      possibleOptions.push({
        label: option,
        value: option,
      });
    });

    return possibleOptions;
  }

  public get nodesKeys() {
    return Object.keys(this.nodes);
  }

  public get showModal() {
    return this.activeNodeModal.id !== '';
  }

  // eslint-disable-next-line class-methods-use-this
  public get dialogueTypeOptions() {
    const options: { label: string; value: string }[] = [
      {
        label: 'Player',
        value: 'Player',
      },
      {
        label: 'AICharacter',
        value: 'AICharacter',
      },
    ];

    return options;
  }
}

decorate(NodesStore, {
  nodes: observable,
  activeNodeModal: observable,
  updateNodePosition: action,
  addNode: action,
  setActiveNode: action,
  reset: action,
  activeNode: computed,
  activeNodeOptions: computed,
  nodesKeys: computed,
  showModal: computed,
  dialogueTypeOptions: computed,
});

export default NodesStore;
