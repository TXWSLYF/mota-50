import { RESOURCES } from "../resources";

const MONSTERS = {
  shilaimugreen: {
    name: "绿色史莱姆",
    hp: 35,
    attack: 18,
    defense: 1,
    money: 1,
    img: RESOURCES.shilaimugreen,
  },
  shilaimured: {
    name: "红色史莱姆",
    hp: 45,
    attack: 20,
    defense: 2,
    money: 2,
    img: RESOURCES.shilaimured,
  },
  xiaobianfu: {
    name: "小蝙蝠",
    hp: 35,
    attack: 38,
    defense: 3,
    money: 3,
    img: RESOURCES.xiaobianfu,
  },
  chujifashi: {
    name: "初级法师",
    hp: 60,
    attack: 32,
    defense: 8,
    money: 5,
    img: RESOURCES.chujifashi,
  },
  kulouren: {
    name: "骷髅人",
    hp: 50,
    attack: 42,
    defense: 6,
    money: 6,
    img: RESOURCES.kulouren,
  },
  kuloushibing: {
    name: "骷髅士兵",
    hp: 55,
    attack: 52,
    defense: 12,
    money: 8,
    img: RESOURCES.kuloushibing,
  },
  chujiweibing: {
    name: "初级卫兵",
    hp: 50,
    attack: 48,
    defense: 22,
    money: 12,
    img: RESOURCES.chujiweibing,
  },
  kulouduizhang: {
    name: "骷髅队长",
    hp: 100,
    attack: 65,
    defense: 15,
    money: 30,
    img: RESOURCES.kulouduizhang,
  },
};

export default MONSTERS;
