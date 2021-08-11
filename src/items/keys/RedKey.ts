import { RESOURCES } from "../../resources";
import KeyBase, { KeyTypes } from "./KeyBase";

export default class RedKey extends KeyBase {
  constructor(x: number, y: number) {
    super(RESOURCES["redkey"], x, y, KeyTypes.RED);
  }
}
