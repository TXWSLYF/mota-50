import { AnimatedSprite, Rectangle, Texture } from "pixi.js";
import app, { GRID_WIDTH } from "./application";
import Monster from "./monsters/Monster";
import { RESOURCES } from "./resources";

/**
 * @description 骑士类
 */
export default class Knight {
  sprite: AnimatedSprite;
  name: string;
  hp: number;
  attack: number;
  defense: number;

  textures: Texture[][] = [[], [], [], []];

  walkUpTextures: Texture[] = [];
  walkDownTextures: Texture[] = [];
  walkLeftTextures: Texture[] = [];
  walkRightTextures: Texture[] = [];

  vx = 0;
  vy = 0;
  speed = 1.2;

  constructor() {
    this.name = "alex";
    this.hp = 100;
    this.attack = 10;
    this.defense = 10;

    this.initTextures();

    this.sprite = new AnimatedSprite(this.walkDownTextures);
    this.sprite.animationSpeed = 0.1;
    this.sprite.loop = false;

    // app.ticker.add(() => {
    //   this.sprite.x += this.vx;
    //   this.sprite.y += this.vy;
    // });

    this.initKeyBoard();
  }

  initTextures() {
    const texture = app.loader.resources[RESOURCES["player"]].texture;

    const texture1 = texture.clone();
    texture1.frame = new Rectangle(0, 0, GRID_WIDTH, GRID_WIDTH);
    const texture2 = texture.clone();
    texture2.frame = new Rectangle(GRID_WIDTH, 0, GRID_WIDTH, GRID_WIDTH);
    const texture3 = texture.clone();
    texture3.frame = new Rectangle(GRID_WIDTH * 3, 0, GRID_WIDTH, GRID_WIDTH);
    const texture4 = texture.clone();
    texture4.frame = new Rectangle(GRID_WIDTH * 2, 0, GRID_WIDTH, GRID_WIDTH);
    this.walkDownTextures.push(texture1, texture2, texture3, texture4);

    const texture5 = texture.clone();
    texture5.frame = new Rectangle(0, GRID_WIDTH, GRID_WIDTH, GRID_WIDTH);
    const texture6 = texture.clone();
    texture6.frame = new Rectangle(GRID_WIDTH, GRID_WIDTH, GRID_WIDTH, GRID_WIDTH);
    const texture7 = texture.clone();
    texture7.frame = new Rectangle(GRID_WIDTH * 2, GRID_WIDTH, GRID_WIDTH, GRID_WIDTH);
    const texture8 = texture.clone();
    texture8.frame = new Rectangle(GRID_WIDTH * 3, GRID_WIDTH, GRID_WIDTH, GRID_WIDTH);
    this.walkLeftTextures.push(texture5, texture6, texture7, texture8);


    const texture9 = texture.clone();
    texture9.frame = new Rectangle(0, GRID_WIDTH * 2, GRID_WIDTH, GRID_WIDTH);
    const texture10 = texture.clone();
    texture10.frame = new Rectangle(GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH, GRID_WIDTH);
    const texture11 = texture.clone();
    texture11.frame = new Rectangle(GRID_WIDTH * 2, GRID_WIDTH * 2, GRID_WIDTH, GRID_WIDTH);
    const texture12 = texture.clone();
    texture12.frame = new Rectangle(GRID_WIDTH * 3, GRID_WIDTH * 2, GRID_WIDTH, GRID_WIDTH);
    this.walkRightTextures.push(texture9, texture10, texture11, texture12);


    const texture13 = texture.clone();
    texture13.frame = new Rectangle(0, GRID_WIDTH * 3, GRID_WIDTH, GRID_WIDTH);
    const texture14 = texture.clone();
    texture14.frame = new Rectangle(GRID_WIDTH, GRID_WIDTH * 3, GRID_WIDTH, GRID_WIDTH);
    const texture15 = texture.clone();
    texture15.frame = new Rectangle(GRID_WIDTH * 3, GRID_WIDTH * 3, GRID_WIDTH, GRID_WIDTH);
    const texture16 = texture.clone();
    texture16.frame = new Rectangle(GRID_WIDTH * 2, GRID_WIDTH * 3, GRID_WIDTH, GRID_WIDTH);
    this.walkUpTextures.push(texture13, texture14, texture15, texture16);

  }

  reset() {
    this.sprite.textures = this.walkUpTextures;
  }

  walkDown() {
    this.sprite.textures = this.walkDownTextures;
    this.sprite.play();
  }

  walkLeft() {
    this.sprite.textures = this.walkLeftTextures;
    this.sprite.play();
  }

  walkRight() {
    this.sprite.textures = this.walkRightTextures;
    this.sprite.play();
  }

  walkUp() {
    this.sprite.textures = this.walkUpTextures;
    this.sprite.play();
  }

  /**
   * @description fight with monster
   */
  fight(monster: Monster) { }

  initKeyBoard() {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      const { key, repeat } = event;

      if (!repeat) {
        if (key === "a") {
          this.walkLeft();
        }
        if (key === "d") {
          this.walkRight();
        }
        if (key === "w") {
          this.walkUp();
        }
        if (key === "s") {
          this.walkDown();
        }
      }
    });

    window.addEventListener("keyup", (event: KeyboardEvent) => {
      // this.sprite.stop();
    });
  }
}
