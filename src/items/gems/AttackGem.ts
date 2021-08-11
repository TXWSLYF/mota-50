import { RESOURCES } from "../../resources";
import GemBase, { GemTypes } from "./GemBase";

export default class AttackGem extends GemBase {
  constructor(x: number, y: number) {
    super(RESOURCES["attackgem"], x, y, GemTypes.ATTACK, 10);
  }
}
