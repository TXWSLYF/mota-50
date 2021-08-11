import { AnimatedSprite, Sprite, Texture } from "pixi.js";
import app from "../application";

export default class Door {
  sprite: AnimatedSprite;

  constructor(img: string, x: number, y: number) {
    const texture = app.loader.resources[img].texture;

    this.sprite = new AnimatedSprite([texture]);

    this.sprite.position.set(x, y);
  }
}
