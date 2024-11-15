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
    <div className="bg-[url('https://cdn.create.vista.com/api/media/medium/188440550/stock-photo-brown-grainy-surface-abstract-background?token=')] w-screen h-screen grid grid-cols-5 grid-rows-5">
      {itemsToBeRendered}
    </div>
  );
}
