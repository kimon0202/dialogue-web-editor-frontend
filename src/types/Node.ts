export interface Node {
  id: string;
  type: string;
  left: number;
  top: number;
  text?: string;
  dialogueType?: string;
  inConnections?: string[];
  outConnections?: string[];
}

export interface NodeMap {
  [key: string]: {
    id: string;
    left: number;
    top: number;
    text?: string;
    dialogueType?: string;
    inConnections?: string[];
    outConnections?: string[];
  };
}
