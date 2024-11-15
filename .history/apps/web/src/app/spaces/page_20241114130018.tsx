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
      itemsToBeRendered.push(<li className="">Item {i + 1}</li>);
      DefaultOrionMap.find(())
    }
  }

  function routeToSpace(spaceType: string) {
    const uniqueID = uuidv4();
    router.push(`/spaces/${spaceType.toLowerCase()}/${uniqueID.toString()}`);
  }
  return (
    // <div className="border-solid border-black border-2 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe9JaQBVmy73kT6g84zuJStFnknNVZ77dlA&s')] grid grid-rows-11 grid-cols-11">
    //   {itemsToBeRendered}
    //   {/* {arrayElements.map((index: number, el: number) => (
    //     <div className="">
    //       {index == 11 && (
    //         <img src="https://png.pngtree.com/png-clipart/20230124/ourmid/pngtree-realistic-transparent-six-chair-big-dinning-table-top-view-for-3d-png-image_6570816.png"></img>
    //       )}
    //       {index == 8 && (
    //         <img src="https://images.vexels.com/content/238314/preview/happy-walking-tree-cartoon-1c8b7a.png"></img>
    //       )}
    //       {index == 22 && (
    //         <img src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-toilet-seat-vector-png-image_12148465.png"></img>
    //       )}
    //       {index == 7 && (
    //         <img src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-new-computer-desk-sticker-vector-png-image_12232131.png"></img>
    //       )}
    //       {index == 1 && (
    //         <img
    //           src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21bf106b-6d21-4fda-b1b6-dfe804247a85/dgffyd7-b0035713-f034-4034-a715-e77acc4b9e88.png/v1/fill/w_1280,h_1811/mk1_full_body_sub_zero___png_by_felipecmx_dgffyd7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcLzIxYmYxMDZiLTZkMjEtNGZkYS1iMWI2LWRmZTgwNDI0N2E4NVwvZGdmZnlkNy1iMDAzNTcxMy1mMDM0LTQwMzQtYTcxNS1lNzdhY2M0YjllODgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fOXQX6puyuhsmm8p4_0rrkPdqSosApOE30I3YGHrei8"
    //           className="w-20"
    //         ></img>
    //       )}
    //     </div>
    //   ))} */}
    // </div>
    <div className="bg-gradient-to-r from-pink-100 to-blue-300 w-screen h-screen">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl pl-5 pt-5 pr-5">
        Choose a Space
      </h1>
      <h1 className="text-lg tracking-tight text-gray-600 pl-5">
        Your workspace on crowd.town.
      </h1>
      <div className="grid md:grid-cols-2 p-8 grid-cols-1">
        {Spaces.map((space: Space) => (
          <Button className="m-5" onClick={() => routeToSpace(space.name)}>
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
