import { createContext } from 'react';

import ConnectionsStore from './connectionsStore';
import FilesStore from './filesStore';
import NodesStore from './nodesStore';

export class RootStore {
  public nodesStore: NodesStore = new NodesStore(this);
  public connectionsStore: ConnectionsStore = new ConnectionsStore(this);
  public filesStore: FilesStore = new FilesStore(this);
}

export const RootStoreContext = createContext(new RootStore());
