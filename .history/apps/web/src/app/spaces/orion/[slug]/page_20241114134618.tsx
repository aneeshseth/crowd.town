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
    <div className="bg-[url('https://i8.amplience.net/i/flooranddecor/101068468_alamo-oak-waterproof-rigid-core-luxury-vinyl-plank---foam-pad_display?fmt.jpeg.interlaced=true&fmt=auto&h=440&qlt=85&w=440')] w-screen h-screen grid grid-cols-5 grid-rows-5">
      {itemsToBeRendered}
    </div>
  );
}
