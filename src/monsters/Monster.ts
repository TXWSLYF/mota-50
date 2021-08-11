import MapItem from "../MapItem";

export default class Monster extends MapItem {
  name: string;
  hp: number;
  attack: number;
  defense: number;
  money: number;
  img: string;

  constructor({
    name,
    hp,
    attack,
    defense,
    money,
    img,
    x,
    y,
  }: {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    money: number;
    img: string;
    x: number;
    y: number;
  }) {
    super(img, x, y);

    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.money = money;
    this.img = img;
  }
}
