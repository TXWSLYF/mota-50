import { Application } from "pixi.js";

const app = new Application({ width: 352, height: 352 });
document.body.appendChild(app.view);

app.view.style.width = "422px";
app.view.style.height = "422px";
app.view.style.borderWidth = "3px";
app.view.style.borderColor = "white";
app.view.style.borderStyle = "solid";

export default app;
