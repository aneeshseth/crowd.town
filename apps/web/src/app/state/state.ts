import { atom } from "recoil";
import { DefaultCosimaMap, DefaultOrionMap } from "../utils/utils";

const orionMapState = atom({
  key: "orionMapObjects",
  default: DefaultOrionMap,
});

const cosimoMapState = atom({
  key: "cosimoMapObjects",
  default: DefaultCosimaMap,
});
