import { RESOURCES } from "../../resources";
import HpBase from "./HpBase";

export default class HpNormal extends HpBase {
  constructor(x: number, y: number) {
    super(RESOURCES["hpNormal"], x, y, 100);
  }
}
