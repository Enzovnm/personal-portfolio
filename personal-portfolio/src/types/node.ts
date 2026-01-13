import type { FileType } from "./file-type";
import type { IconType } from "./icon-type";

export interface INode {
  id: number;
  name: string;
  type: FileType;
  iconType?: IconType;
  children?: INode[];
  fileKey?: FileKey;
}

export type FileKey =
  | "about"
  | "journey"
  | "technologies"
  | "projects"
  | "contact"
  | "readme";
