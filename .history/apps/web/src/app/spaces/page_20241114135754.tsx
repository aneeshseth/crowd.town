"use client";
import { Box, Button } from "@radix-ui/themes";
import { v4 as uuidv4 } from "uuid";
import { Objects, objectState, Space, userState } from "../types/state";
import { DefaultOrionMap, Spaces } from "../utils/utils";
import { useRouter } from "next/navigation";
import "./page.css";
export default function Game() {
  const usersState: userState[] = [
    { name: "aneesh", gridRow: 2, gridCol: 5, avatarURI: "" },
    { name: "aneesh", gridRow: 2, gridCol: 5, avatarURI: "" },
  ];
  const router = useRouter();
  const itemsToBeRendered: React.JSX.Element[] = [];
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      const o = DefaultOrionMap.find(
        (object: objectState) => object.gridRow == i && object.gridCol == j
      );
      if (o != null) {
        itemsToBeRendered.push(<img src={o.objectURI} />);
      }
    }
  }

  function routeToSpace(spaceType: string) {
    const uniqueID = uuidv4();
    router.push(
      `/spaces/${spaceType.toLowerCase()}/${uniqueID.toString()}?create=true`
    );
  }
  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-300 w-screen h-screen">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl pl-5 pt-5 pr-5">
        Choose a Space
      </h1>
      <h1 className="text-lg tracking-tight text-gray-600 pl-5">
        Your workspace on crowd.town.
      </h1>
      <div className="grid md:grid-cols-2 p-8 grid-cols-1">
        {Spaces.map((space: Space) => (
          <Button
            className="m-5"
            onClick={() => routeToSpace(space.name)}
            key={space.uri}
          >
            <img
              src={space.uri}
              className="rounded-xl w-full h-full hover:scale-105"
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
