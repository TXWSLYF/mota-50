import { Container, Sprite } from "pixi.js";
import app, { GRID_COUNT, GRID_WIDTH } from "../application";
import { RESOURCES } from "../resources";

export default class MotaMap {
  // 层数
  level: number;

  container: Container;

  map: any[][];

  constructor({ level, map }: { level: number; map: any[][] }) {
    this.level = level;
    this.map = map;
    this.container = new Container();
    app.stage.addChild(this.container);
  }

  load() {
    this.drawGrids();
    this.drawMap();
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
}
