import MapItem from "../../MapItem";

export enum KeyTypes {
  YELLOW = "YELLOW",
  BLUE = "BLUE",
  RED = "RED",
}

export default class KeyBase extends MapItem {
  type: KeyTypes;

  constructor(img: string, x: number, y: number, type: KeyTypes) {
    super(img, x, y);
    this.type = type;
  }
}
