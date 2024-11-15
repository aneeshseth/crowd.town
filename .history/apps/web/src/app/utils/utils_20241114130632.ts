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
    objectURI:
      "https://png.pngtree.com/recommend-works/png-clipart/20240913/ourmid/pngtree-top-view-of-corner-workbench-png-image_12326675.png",
  },
  {
    type: Objects.workTable,
    gridCol: 4,
    gridRow: 9,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20211024/original/pngtree-furniture-top-view-long-table-dining-chair-png-image_6870336.png",
  },
  {
    type: Objects.toilet,
    gridCol: 3,
    gridRow: 7,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20230914/original/pngtree-toilet-seat-vector-png-image_12148465.png",
  },
  {
    type: Objects.plant,
    gridCol: 2,
    gridRow: 9,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20230328/original/pngtree-indoor-plant-top-view-png-image_9005665.png",
  },
  {
    type: Objects.plant,
    gridCol: 8,
    gridRow: 5,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20230328/original/pngtree-indoor-plant-top-view-png-image_9005665.png",
  },
];

export const DefaultCosimaMap: objectState[] = [
  {
    type: Objects.singleTable,
    gridCol: 2,
    gridRow: 5,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/recommend-works/png-clipart/20240913/ourmid/pngtree-top-view-of-corner-workbench-png-image_12326675.png",
  },
  {
    type: Objects.workTable,
    gridCol: 4,
    gridRow: 9,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20211024/original/pngtree-furniture-top-view-long-table-dining-chair-png-image_6870336.png",
  },
  {
    type: Objects.toilet,
    gridCol: 3,
    gridRow: 7,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20230914/original/pngtree-toilet-seat-vector-png-image_12148465.png",
  },
  {
    type: Objects.plant,
    gridCol: 2,
    gridRow: 9,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20230328/original/pngtree-indoor-plant-top-view-png-image_9005665.png",
  },
  {
    type: Objects.plant,
    gridCol: 8,
    gridRow: 5,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20230328/original/pngtree-indoor-plant-top-view-png-image_9005665.png",
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
