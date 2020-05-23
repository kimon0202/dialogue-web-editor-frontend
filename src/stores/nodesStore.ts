import update from 'immutability-helper';
import { action, computed, observable } from 'mobx';

import { RootStore } from '.';
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

  @observable nodes: NodeMap = {
    'id:rootNode': {
      id: 'id:rootNode',
      left: 80,
      top: 20,
    },
  };

  @observable activeNodeModal: ActiveNodeModal = {
    id: '',
    mode: null,
  };

  @action
  public updateNodePosition(id: string, left: number, top: number) {
    this.nodes = update(this.nodes, {
      [id]: {
        $merge: { left, top },
      },
    });
  }

  @action
  public addNode(id: string, left: number, top: number) {
    const newNodes = update(this.nodes, {
      [id]: {
        $set: {
          left,
          top,
          id,
        },
      },
    });

    this.nodes = newNodes;
  }

  @action
  public deleteNode(id: string) {
    this.nodesKeys.forEach((key) => {
      if (key === id) {
        delete this.nodes[id];
      }
    });
  }

  @action
  public setActiveNode(id: string, mode: 'delete' | 'edit' | null) {
    this.activeNodeModal = {
      id,
      mode,
    };
  }

  @action
  public reset() {
    this.nodes = {
      'id:rootNode': {
        id: 'id:rootNode',
        left: 80,
        top: 20,
      },
    };
  }

  @computed
  public get activeNode() {
    return this.nodes[this.activeNodeModal.id];
  }

  @computed
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

  @computed
  public get nodesKeys() {
    return Object.keys(this.nodes);
  }

  @computed
  public get showModal() {
    return this.activeNodeModal.id !== '';
  }

  @computed
  // eslint-disable-next-line class-methods-use-this
  public get dialogueTypeOptions() {
    const options: { label: string; value: string }[] = [
      {
        label: 'player',
        value: 'player',
      },
      {
        label: 'ai-character',
        value: 'ai-character',
      },
    ];

    return options;
  }
}

export default NodesStore;
