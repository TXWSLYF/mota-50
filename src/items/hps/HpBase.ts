import MapItem from "../../MapItem";

/**
 * @description 药水基类
 */
export default class HpBase extends MapItem {
  amount: number;

  constructor(img: string, x: number, y: number, amount: number) {
    super(img, x, y);
    this.amount = amount;
  }
}
