import { AnimatedSprite, Rectangle } from "pixi.js";
import app from "./application";
import Monster from "./monsters/Monster";
import { RESOURCES } from "./resources";
import hotkeys from "hotkeys-js";

export default class Knight {
  sprite: AnimatedSprite;
  spriteWalk: AnimatedSprite;
  name: string;
  hp: number;
  attack: number;
  defense: number;

  vx = 0;
  vy = 0;

  speed = 1.2;

  constructor() {
    this.name = "alex";
    this.hp = 100;
    this.attack = 10;
    this.defense = 10;

    const texture = app.loader.resources[RESOURCES["player"]].texture;
    const texture1 = texture.clone();
    texture1.frame = new Rectangle(0, 0, 32, 32);
    const spriteWalk = new AnimatedSprite([texture1]);
    this.spriteWalk = spriteWalk;
    this.sprite = spriteWalk;

    app.ticker.add(() => {
      this.sprite.x += this.vx;
      this.sprite.y += this.vy;
    });

    this.initKeyBoard();
  }

  fight(monster: Monster) {}

  initKeyBoard() {
    hotkeys("a", { keyup: true }, (event) => {
      if (event.type === "keydown") {
        this.vx = -this.speed;
      }

      if (event.type === "keyup") {
        this.vx = 0;
      }
    });

    hotkeys("d", { keyup: true }, (event) => {
      if (event.type === "keydown") {
        this.vx = this.speed;
      }

      if (event.type === "keyup") {
        this.vx = 0;
      }
    });

    hotkeys("w", { keyup: true }, (event) => {
      if (event.type === "keydown") {
        this.vy = -this.speed;
      }

      if (event.type === "keyup") {
        this.vy = 0;
      }
    });

    hotkeys("s", { keyup: true }, (event) => {
      if (event.type === "keydown") {
        this.vy = this.speed;
      }

      if (event.type === "keyup") {
        this.vy = 0;
      }
    });
  }
}
