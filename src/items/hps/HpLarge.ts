import { RESOURCES } from "../../resources";
import HpBase from "./HpBase";

export default class HpLarge extends HpBase {
  constructor(x: number, y: number) {
    super(RESOURCES["hpLarge"], x, y, 200);
  }
}
