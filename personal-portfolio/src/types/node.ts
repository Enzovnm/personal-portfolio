import type { FileType } from "./file-type";

export interface Node {
  name: string;
  type: FileType;
  children?: Node[];
}
