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
  imgWidth?: string;
  imgHeight?: string;
};

export type Space = {
  name: AvailableSpaces;
  objects: objectState[];
  uri: string;
};

export enum Objects {
  workTable = "workTable",
  toilet = "toilet",
  singleTable = "singleTable",
  plant = "plant",
}

export enum AvailableSpaces {
  Orion = "Orion",
  Cosima = "Cosima",
}
