import { RESOURCES } from "../../resources";
import Door from "./Door";

export default class RedDoor extends Door {
  constructor(x: number, y: number) {
    super(RESOURCES["redgate"], x, y);
  }
}
