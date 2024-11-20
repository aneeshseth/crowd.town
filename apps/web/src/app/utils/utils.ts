import { v4 as uuidv4 } from "uuid";
import {
  AvailableSpaces,
  Objects,
  objectState,
  Space,
  userState,
} from "../types/state";
import randomString from "randomstring";

export const DefaultOrionMap: objectState[] = [
  {
    type: Objects.singleTable,
    gridCol: 4,
    gridRow: 3,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/recommend-works/png-clipart/20240913/ourmid/pngtree-top-view-of-corner-workbench-png-image_12326675.png",
    imgHeight: "100px",
    imgWidth: "500px",
  },
  {
    type: Objects.workTable,
    gridCol: 2,
    gridRow: 1,
    isActive: false,
    objectURI:
      "https://static.wixstatic.com/media/6782ac_2b661c3825e544d9a81ed0dfbd7e1f5a~mv2.png/v1/fill/w_560,h_344,al_c,lg_1,q_85,enc_auto/png-transparent-effective-meetings-group-discussion-office-illustrator-businessperson-remo.png",
    imgHeight: "150px",
    imgWidth: "500px",
  },
  {
    type: Objects.plant,
    gridCol: 0,
    gridRow: 3,
    isActive: false,
    objectURI:
      "https://static.vecteezy.com/system/resources/previews/023/985/137/non_2x/cute-cartoon-gardening-cactus-plant-potted-drawing-illustration-free-png.png",
  },
  {
    type: Objects.plant,
    gridCol: 4,
    gridRow: 0,
    isActive: false,
    objectURI:
      "https://static.vecteezy.com/system/resources/previews/023/985/137/non_2x/cute-cartoon-gardening-cactus-plant-potted-drawing-illustration-free-png.png",
  },
];

export const DefaultCosimaMap: objectState[] = [
  {
    type: Objects.singleTable,
    gridCol: 4,
    gridRow: 3,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/recommend-works/png-clipart/20240913/ourmid/pngtree-top-view-of-corner-workbench-png-image_12326675.png",
    imgHeight: "100px",
    imgWidth: "500px",
  },
  {
    type: Objects.workTable,
    gridCol: 2,
    gridRow: 1,
    isActive: false,
    objectURI:
      "https://static.wixstatic.com/media/6782ac_2b661c3825e544d9a81ed0dfbd7e1f5a~mv2.png/v1/fill/w_560,h_344,al_c,lg_1,q_85,enc_auto/png-transparent-effective-meetings-group-discussion-office-illustrator-businessperson-remo.png",
    imgHeight: "150px",
    imgWidth: "500px",
  },
  {
    type: Objects.plant,
    gridCol: 0,
    gridRow: 3,
    isActive: false,
    objectURI:
      "https://png.pngtree.com/png-clipart/20230328/original/pngtree-indoor-plant-top-view-png-image_9005665.png",
  },
  {
    type: Objects.plant,
    gridCol: 4,
    gridRow: 0,
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

export const Users: userState[] = [
  {
    name: randomString.generate(),
    gridRow: 1,
    gridCol: 1,
    avatarURI:
      "https://avatarsdk.com/wp-content/uploads/2023/06/MetaPerson-avatar.png",
  },
  {
    name: randomString.generate(),
    gridRow: 1,
    gridCol: 2,
    avatarURI:
      "https://cdn4.iconfinder.com/data/icons/professions-2-5/66/102-512.png",
  },
  {
    name: randomString.generate(),
    gridRow: 1,
    gridCol: 2,
    avatarURI:
      "https://static.vecteezy.com/system/resources/previews/034/415/189/non_2x/full-body-view-of-a-30-years-old-young-handsome-business-man-with-an-upset-expression-on-his-face-ai-generated-png.png",
  },
  {
    name: randomString.generate(),
    gridRow: 2,
    gridCol: 3,
    avatarURI:
      "https://cdn3.iconfinder.com/data/icons/people-2-9/50/104-512.png",
  },
];
