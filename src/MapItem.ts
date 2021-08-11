import { Sprite } from "pixi.js";
import app from "./application";

export default class MapItem {
  sprite: Sprite;

  constructor(img: string, x: number, y: number) {
    this.sprite = new Sprite(app.loader.resources[img].texture);
    this.sprite.position.set(x, y);
  }
}
