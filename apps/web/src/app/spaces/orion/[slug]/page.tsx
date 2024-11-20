"use client";
import { objectState, userState } from "@/app/types/state";
import { DefaultOrionMap, Users } from "@/app/utils/utils";
import { useEffect, useState } from "react";

export default function OrionMap() {
  const [itemsToBeRendered, setItemsToBeRendered] = useState<React.JSX.Element[]>([]);
  const [user, setUser] = useState<userState>();

  function initRenderDetails() {
    let isFoundInitPositionForUser: boolean = false;
    const userSelectionIndex: number = Math.floor(Math.random() * 4);
    const userSelected: userState = Users[userSelectionIndex];
  
    const isObjectFoundAtInitUserPosition = DefaultOrionMap.find(
      (object: objectState) =>
        object.gridRow === userSelected.gridRow && object.gridCol === userSelected.gridCol
    );
  
    if (isObjectFoundAtInitUserPosition != null) {
      while (!isFoundInitPositionForUser) {
        userSelected.gridRow++;
        userSelected.gridCol++;
        const isObjectFoundAtNewInitUserPosition = DefaultOrionMap.find(
          (object: objectState) =>
            object.gridRow === userSelected.gridRow && object.gridCol === userSelected.gridCol
        );
        if (isObjectFoundAtNewInitUserPosition == null) isFoundInitPositionForUser = true;
      }
    }

    setUser(userSelected);
  }

  function renderScreen() {
    if (!user) return;

    const newItems: React.JSX.Element[] = []; 
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const o = DefaultOrionMap.find(
          (object: objectState) => object.gridRow === i && object.gridCol === j
        );
        if (o != null) {
          newItems.push(<img key={`object-${i}-${j}`} src={o.objectURI} />);
          continue;
        }
        if (user?.gridRow === i && user.gridCol === j) {
          newItems.push(
            <img
              key={`user-${i}-${j}`}
              src={user?.avatarURI}
              className="w-32 h-32"
            />
          );
          continue;
        }
        newItems.push(<div key={`empty-${i}-${j}`} />);
      }
    }
    setItemsToBeRendered(newItems);
  }

  function onUserMovemenet(e: KeyboardEvent) {
    console.log(user)
    if (!user) return;

    let newGridRow = user.gridRow;
    let newGridCol = user.gridCol;
    switch (e.key) {
      case "ArrowDown":
        newGridRow++;
        break;
      case "ArrowRight":
        newGridCol++;
        break;
      case "ArrowUp":
        newGridRow--;
        break;
      case "ArrowLeft":
        newGridCol--;
        break;
      default:
        return; 
    }

    if (newGridRow < 0 || newGridRow > 4 || newGridCol < 0 || newGridCol > 4) {
      return;
    }


    const isCollision = DefaultOrionMap.find(
      (object: objectState) =>
        object.gridRow === newGridRow && object.gridCol === newGridCol
    );

    if (!isCollision) {
      setUser({ ...user, gridRow: newGridRow, gridCol: newGridCol });
    }
  }

  useEffect(() => {
    initRenderDetails();
  }, []); 

  useEffect(() => {
    renderScreen(); 
  }, [user]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      onUserMovemenet(event);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [user]);

  return (
    <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8KvtCeu8jY9hgbJSxpFOEGfVAr_8dmxrihI1e8RWtOO53W_whdXnXxiSrr4Va2wkLdA&usqp=CAU')] w-screen h-screen grid grid-cols-5 grid-rows-5">
      {itemsToBeRendered}
    </div>
  );
}
