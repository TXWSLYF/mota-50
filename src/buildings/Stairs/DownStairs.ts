import { RESOURCES } from "../../resources";
import Stairs, { StairsDirection } from "./Stairs";

export default class DownStairs extends Stairs {
  constructor(x: number, y: number) {
    super(RESOURCES["downStairs"], x, y, StairsDirection.DOWN);
  }
}
