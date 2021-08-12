import RedDoor from "../buildings/Door/RedDoor";
import YellowDoor from "../buildings/Door/YellowDoor";
import UpStairs from "../buildings/Stairs/UpStairs";
import Wall from "../buildings/Wall";
import AttackGem from "../items/gems/AttackGem";
import DefenceGem from "../items/gems/DefenceGem";
import HpLarge from "../items/hps/HpLarge";
import HpNormal from "../items/hps/HpNormal";
import RedKey from "../items/keys/RedKey";
import YellowKey from "../items/keys/YellowKey";
import ChuJiFaShi from "../monsters/ChuJiFaShi";
import KuLouRen from "../monsters/KuLouRen";
import KuLouShiBing from "../monsters/KuLouShiBing";
import ShiLaiMuGreen from "../monsters/ShiLaiMuGreen";
import ShiLaiMuRed from "../monsters/ShiLaiMuRed";
import XiaoBianFu from "../monsters/XiaoBianFu";

export const MAP1 = {
  level: 1,
  map: [
    [UpStairs, null, ShiLaiMuGreen, ShiLaiMuRed, ShiLaiMuGreen],
    [Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall, Wall],
    [
      HpNormal,
      null,
      null,
      YellowDoor,
      null,
      Wall,
      AttackGem,
      YellowKey,
      null,
      Wall,
    ],
    [null, KuLouRen, null, Wall, null, Wall, DefenceGem, HpNormal, null, Wall],
    [Wall, YellowDoor, Wall, Wall, null, Wall, Wall, Wall, YellowDoor, Wall],
    [
      YellowKey,
      null,
      null,
      Wall,
      null,
      YellowDoor,
      XiaoBianFu,
      ChuJiFaShi,
      XiaoBianFu,
      Wall,
    ],
    [null, KuLouShiBing, null, Wall, null, Wall, Wall, Wall, Wall, Wall],
    [Wall, YellowDoor, Wall, Wall, null, null, null, null, null, null],
    [null, null, null, Wall, Wall, RedDoor, Wall, Wall, Wall, YellowDoor, Wall],
    [
      HpNormal,
      null,
      YellowKey,
      Wall,
      RedKey,
      null,
      null,
      Wall,
      null,
      XiaoBianFu,
    ],
    [
      HpNormal,
      null,
      YellowKey,
      Wall,
      null,
      null,
      null,
      Wall,
      ShiLaiMuGreen,
      HpLarge,
      ShiLaiMuGreen,
    ],
  ],
  knightPosition: {
    x: 5,
    y: 10,
  },
};
