import { FC, useEffect } from "react";
import {
  constructBackslashTriangleBlock,
  prepareCanvas,
} from "../../lib/generator/rect-block-generator";
import { rectGeneratorInfo } from "./RectGenerator";

interface Props {}

export const BackSlashBlock: FC<Props> = () => {
  const id = "generator-canvas-back-slash-block";

  useEffect(() => {
    const { ctx } = prepareCanvas(id, rectGeneratorInfo);
    constructBackslashTriangleBlock(
      ctx,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo.canvasPadding,
      rectGeneratorInfo
    );
  }, []);

  return <canvas id={id} />;
};
