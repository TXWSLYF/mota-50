import Wall from "../buildings/Wall";
import YellowDoor from "../buildings/YellowDoor";

export const MAP1 = {
  level: 1,
  map: [
    [],
    [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    [null, null, null, YellowDoor, null, Wall, null, null, null, Wall],
    [null, null, null, Wall, null, Wall, null, null, null, Wall],
    [Wall, null, Wall, Wall, null, Wall, null, null, null, Wall],
  ],
};
