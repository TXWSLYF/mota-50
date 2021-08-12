import app from "./application";

export const RESOURCES = {
  // buildings
  grid: "images/buildings/grid.png",
  wall: "images/buildings/wall.png",
  yellowgate: "images/buildings/yellowgate.png",
  redgate: "images/buildings/redgate.png",
  upStairs: "images/buildings/up.png",
  downStairs: "images/buildings/down.png",

  // monsters
  shilaimugreen: "images/monsters/monster01.png",
  shilaimured: "images/monsters/monster02.png",
  xiaobianfu: "images/monsters/monster03.png",
  chujifashi: "images/monsters/monster04.png",
  kulouren: "images/monsters/monster05.png",
  kuloushibing: "images/monsters/monster06.png",
  chujiweibing: "images/monsters/monster07.png",
  kulouduizhang: "images/monsters/monster08.png",

  // items
  // hps
  hpNormal: "images/items/hp.png",
  hpLarge: "images/items/hplarge.png",

  // gems
  attackgem: "images/items/attackgem.png",
  defencegem: "images/items/defencegem.png",

  // keys
  yellowkey: "images/items/yellowkey.png",
  bluekey: "images/items/bluekey.png",
  redkey: "images/items/redkey.png",

  // other
  player: "images/player.png",
};

// 加载图片
Object.keys(RESOURCES).forEach((key) => {
  app.loader.add(RESOURCES[key]);
});

export const loadResources = async () => {
  await new Promise((resolve) => {
    app.loader.load(() => {
      resolve("success");
    });
  });
};
