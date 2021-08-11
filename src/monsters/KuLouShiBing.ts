import Monster from "./Monster";
import MONSTERS from "./monsters";

export default class KuLouShiBing extends Monster {
  constructor(x: number, y: number) {
    super({ x, y, ...MONSTERS.kuloushibing });
  }
}
