import { AnimatedSprite, Rectangle, Texture } from "pixi.js";
import app, { GRID_WIDTH } from "./application";
import Monster from "./monsters/Monster";
import { RESOURCES } from "./resources";
import hotkeys from "hotkeys-js";

export default class Knight {
  sprite: AnimatedSprite;
  name: string;
  hp: number;
  attack: number;
  defense: number;

  textures: Texture[][] = [[], [], [], []];
  keys = ["s", "a", "d", "w"];

  vx = 0;
  vy = 0;

  speed = 1.2;

  constructor() {
    this.name = "alex";
    this.hp = 100;
    this.attack = 10;
    this.defense = 10;

    const texture = app.loader.resources[RESOURCES["player"]].texture;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const clonedTexture = texture.clone();
        clonedTexture.frame = new Rectangle(
          j * GRID_WIDTH,
          i * GRID_WIDTH,
          GRID_WIDTH,
          GRID_WIDTH
        );

        this.textures[i][j] = clonedTexture;
      }
    }

    this.sprite = new AnimatedSprite(this.textures[1]);
    this.sprite.animationSpeed = 0.1;

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
