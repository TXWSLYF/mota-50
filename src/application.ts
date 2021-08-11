import { Application } from "pixi.js";

export const GRID_WIDTH = 32;
export const GRID_COUNT = 11;

const app = new Application({
  width: GRID_WIDTH * GRID_COUNT,
  height: GRID_WIDTH * GRID_COUNT,
});
document.body.appendChild(app.view);

app.view.style.borderWidth = "3px";
app.view.style.borderColor = "white";
app.view.style.borderStyle = "solid";

export default app;
