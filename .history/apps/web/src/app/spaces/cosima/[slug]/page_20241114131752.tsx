import { objectState } from "@/app/types/state";
import { DefaultOrionMap } from "@/app/utils/utils";

export default function CosimaMap() {
  const itemsToBeRendered: React.JSX.Element[] = [];
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      const o = DefaultOrionMap.find(
        (object: objectState) => object.gridRow == i && object.gridCol == j
      );
      if (o != null) {
        itemsToBeRendered.push(
          <img
            src={o.objectURI}
            className={`${o.imgHeight != "" && `w-[${o.imgWidth}]`}`}
          />
        );
        continue;
      }
      itemsToBeRendered.push(<div />);
    }
  }
  return (
    <div className="bg-[url('https://t3.ftcdn.net/jpg/02/32/81/94/360_F_232819464_VHedOPkRpeQPGtbwXiS4xB2lBQO92B1O.jpg')] w-screen h-screen grid grid-cols-11 grid-rows-11">
      {itemsToBeRendered}
    </div>
  );
}
