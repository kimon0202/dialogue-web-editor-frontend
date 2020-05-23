import { Connection } from './Connection';
import { NodeMap } from './Node';

export interface FileData {
  name: string;
  createdAt: number;
  nodes: NodeMap;
  connections: Connection[];
}
