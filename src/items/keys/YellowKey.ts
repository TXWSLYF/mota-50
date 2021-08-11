import { RESOURCES } from "../../resources";
import KeyBase, { KeyTypes } from "./KeyBase";

export default class YellowKey extends KeyBase {
  constructor(x: number, y: number) {
    super(RESOURCES["yellowkey"], x, y, KeyTypes.YELLOW);
  }
}
