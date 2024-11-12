export type userState = {
  name: string;
  gridRow: number;
  gridCol: number;
  avatarURI: string;
};

export type objectState = {
  type: Objects;
  gridRow: number;
  gridCol: number;
  isActive: boolean;
  objectURI: string;
};

export enum Objects {
  workTable,
  toilet,
  singleTable,
  plant,
}
