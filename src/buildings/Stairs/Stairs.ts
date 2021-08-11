import MapItem from "../../MapItem";

export enum StairsDirection {
  UP = "UP",
  DOWN = "DOWN",
}

export default class Stairs extends MapItem {
  direction: StairsDirection;

  constructor(img: string, x: number, y: number, direction: StairsDirection) {
    super(img, x, y);
    this.direction = direction;
  }
}
