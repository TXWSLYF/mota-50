import { AnimatedSprite, Rectangle } from "pixi.js";
import app from "../../application";

export default class Door {
  sprite: AnimatedSprite;

  isOpen = false;

  constructor(img: string, x: number, y: number) {
    const texture = app.loader.resources[img].texture;

    const texture1 = texture.clone();
    texture1.frame = new Rectangle(0, 0, 32, 32);

    const texture2 = texture.clone();
    texture2.frame = new Rectangle(0, 32, 32, 32);

    const texture3 = texture.clone();
    texture3.frame = new Rectangle(0, 64, 32, 32);

    const texture4 = texture.clone();
    texture4.frame = new Rectangle(0, 96, 32, 32);

    this.sprite = new AnimatedSprite([texture1, texture2, texture3, texture4]);

    this.sprite.position.set(x, y);
    this.sprite.animationSpeed = 0.1;
  }

  play() {
    this.sprite.play();
    this.isOpen = true;
  }
}
