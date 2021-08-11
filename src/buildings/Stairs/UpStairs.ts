import { RESOURCES } from "../../resources";
import Stairs, { StairsDirection } from "./Stairs";

export default class UpStairs extends Stairs {
  constructor(x: number, y: number) {
    super(RESOURCES["upStairs"], x, y, StairsDirection.UP);
  }
}
