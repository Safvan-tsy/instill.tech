import { FC, useEffect, useState } from "react";
import { prepareCanvas } from "../../../lib/generator/common";
import { constructOptimizePixelDiagram } from "../../../lib/generator/pixel-block-generator";
import { PixelGeneratorInfo } from "../../../types/generator";

interface Props {}

export const generatorInfo: PixelGeneratorInfo = {
  blockSize: 300,
  blockTypeCount: 5,
  baseStrokeColor: "#000000",
  blockBaseColor: "#374151",
  baseStrokeWidth: 50,
  rowCount: 3,
  columnCount: 3,
  canvasPadding: 10,
  colorArray: ["#FFFF1A", "#FCB21B", "#27FC86", "#3EEDFF", "#F75FFF", "#C65AFF"],
};

export const DiagramGenerator: FC<Props> = () => {
  const [state, updateState] = useState(0);
  const id = "pixel-block-diagram-generator";
  const forceUpdate = () => {
    updateState(state + 1);
  };

  useEffect(() => {
    const { ctx } = prepareCanvas(id, generatorInfo);
    constructOptimizePixelDiagram(ctx, generatorInfo);
  }, [state]);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="px-[10px]">
        <button className="px-2 border border-gray-600 text-sm" onClick={forceUpdate}>
          refresh-diagram
        </button>
      </div>
      <div>
        <canvas id={id} />
      </div>
    </div>
  );
};