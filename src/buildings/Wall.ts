import MapItem from "../MapItem";
import { RESOURCES } from "../resources";

export default class Wall extends MapItem {
  constructor(x: number, y: number) {
    super(RESOURCES["wall"], x, y);
  }
}
