import {
  AvailableSpaces,
  Objects,
  objectState,
  Space,
  userState,
} from "../types/state";

export const DefaultOrionMap: objectState[] = [
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.workTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.toilet,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.plant,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.plant,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
];

export const DefaultCosimaMap: objectState[] = [
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI: "",
  },
];

export const Spaces: Space[] = [
  {
    name: AvailableSpaces.Orion,
    objects: DefaultOrionMap,
    uri: "https://media.istockphoto.com/id/490280020/vector/usa-map-in-cartoon-style.jpg?s=612x612&w=0&k=20&c=SHpp_me2vdbdOXOnN5MT5a0PcrqytRRkMKQfrrgaRYA=",
  },
  {
    name: AvailableSpaces.Cosima,
    objects: DefaultCosimaMap,
    uri: "https://png.pngtree.com/background/20230410/original/pngtree-map-blue-cartoon-illustration-background-picture-image_2384833.jpg",
  },
];
