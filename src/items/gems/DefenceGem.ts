import { RESOURCES } from "../../resources";
import GemBase, { GemTypes } from "./GemBase";

export default class DefenceGem extends GemBase {
  constructor(x: number, y: number) {
    super(RESOURCES["defencegem"], x, y, GemTypes.DEFENCE, 10);
  }
}
