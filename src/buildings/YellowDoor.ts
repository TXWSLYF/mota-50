import { RESOURCES } from "../resources";
import Door from "./Door";

export default class YellowDoor extends Door {
  constructor(x: number, y: number) {
    super(RESOURCES["yellowgate"], x, y);
  }
}
