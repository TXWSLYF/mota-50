import { RESOURCES } from "../../resources";
import KeyBase, { KeyTypes } from "./KeyBase";

export default class BlueKey extends KeyBase {
  constructor(x: number, y: number) {
    super(RESOURCES["bluekey"], x, y, KeyTypes.BLUE);
  }
}
