import { loadResources } from "./resources";
import MotaMap from "./maps/MotaMap";
import { MAP1 } from "./maps/map01";

loadResources().then(() => {
  const map1 = new MotaMap(MAP1);
  map1.load();
});
