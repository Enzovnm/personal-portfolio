import type { FileType } from "./file-type";

export interface INode {
  name: string;
  type: FileType;
  children?: INode[];
}
