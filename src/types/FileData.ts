import { Connection } from './Connection';
import { NodeMap } from './Node';

export interface FileData {
  name: string;
  nodes: NodeMap;
  connections: Connection[];
}
