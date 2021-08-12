import { Container, Sprite } from "pixi.js";
import app, { GRID_COUNT, GRID_WIDTH } from "../application";
import Knight from "../Knight";
import { RESOURCES } from "../resources";

export default class MotaMap {
  // 层数
  level: number;
  map: any[][];
  knightPosition: { x: number; y: number };

  container: Container;
  knight: Knight;

  constructor({
    level,
    map,
    knightPosition,
  }: {
    level: number;
    map: any[][];
    knightPosition: { x: number; y: number };
  }) {
    this.level = level;
    this.map = map;
    this.knightPosition = knightPosition;
    this.container = new Container();
    app.stage.addChild(this.container);
  }

  load() {
    this.drawGrids();
    this.drawMap();
    this.drawKnight();
  }

  drawGrids() {
    const gridTexture = app.loader.resources[RESOURCES["grid"]].texture;

    for (let i = 0; i < GRID_COUNT; i++) {
      for (let j = 0; j < GRID_COUNT; j++) {
        const grid = new Sprite(gridTexture);
        grid.position.set(i * GRID_WIDTH, j * GRID_WIDTH);

        this.container.addChild(grid);
      }
    }
  }

  drawMap() {
    this.map.forEach((arr, i) => {
      arr.forEach((mapItem, j) => {
        if (mapItem) {
          const wall = new mapItem(j * GRID_WIDTH, i * GRID_WIDTH);
          this.container.addChild(wall.sprite);
        }
      });
    });
  }

  drawKnight() {
    const { x, y } = this.knightPosition;
    const knight = new Knight();
    this.knight = knight;
    knight.sprite.position.set(x * GRID_WIDTH, y * GRID_WIDTH);

    this.container.addChild(knight.sprite);
  }
}
