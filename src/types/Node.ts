export interface Node {
  id: string;
  type: string;
  left: number;
  top: number;
  text?: string;
  dialogueType?: string;
}

export interface NodeMap {
  [key: string]: {
    id: string;
    left: number;
    top: number;
    text?: string;
    dialogueType?: string;
  };
}

export interface NodeEditFormData {
  text: string;
  inConnections: { label: string; value: string }[];
  outConnections: { label: string; value: string }[];
  type: { label: string; value: string };
}
