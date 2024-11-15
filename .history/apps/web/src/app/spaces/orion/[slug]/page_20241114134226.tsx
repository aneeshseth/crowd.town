import { objectState } from "@/app/types/state";
import { DefaultCosimaMap, DefaultOrionMap } from "@/app/utils/utils";

export default function OrionMap() {
  const itemsToBeRendered: React.JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const o = DefaultOrionMap.find(
        (object: objectState) => object.gridRow == i && object.gridCol == j
      );
      if (o != null) {
        itemsToBeRendered.push(<img src={o.objectURI} />);
        continue;
      }
      itemsToBeRendered.push(<div />);
    }
  }
  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/020/257/622/small_2x/wooden-material-textured-surface-wood-comic-background-in-cartoon-style-wall-panel-for-game-ui-design-illustration-vector.jpg')] w-screen h-screen grid grid-cols-5 grid-rows-5">
      {itemsToBeRendered}
    </div>
  );
}
