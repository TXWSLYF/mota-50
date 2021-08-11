import { Container, Sprite } from "pixi.js";
import app from "../application";
import Wall from "../buildings/Wall";
import YellowDoor from "../buildings/YellowDoor";
import MapItem from "../MapItem";
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
    const widthCount = app.view.width / gridTexture.width;
    const heightCount = app.view.height / gridTexture.height;

    for (let i = 0; i < widthCount; i++) {
      for (let j = 0; j < heightCount; j++) {
        const grid = new Sprite(gridTexture);
        grid.position.set(i * gridTexture.width, j * gridTexture.height);

        this.container.addChild(grid);
      }
    }
  }

  drawMap() {
    this.map.forEach((arr, i) => {
      arr.forEach((mapItem, j) => {
        if (mapItem) {
          if (mapItem === Wall) {
            const wall = new Wall(j * 32, i * 32);
            this.container.addChild(wall.sprite);
          }

          if (mapItem === YellowDoor) {
            const yellowDoor = new YellowDoor(j * 32, i * 32);
            this.container.addChild(yellowDoor.sprite);
          }
        }
      });
    });
  }
}
