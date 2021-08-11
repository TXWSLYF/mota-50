import MapItem from "../../MapItem";

export enum GemTypes {
  ATTACK = "ATTACK",
  DEFENCE = "DEFENCE",
}

export default class GemBase extends MapItem {
  // 宝石类型
  type: GemTypes;
  // 宝石数值
  value: number;

  constructor(img: string, x: number, y: number, type: GemTypes, value: number) {
    super(img, x, y);
    this.type = type;
    this.value = value;
  }
}
