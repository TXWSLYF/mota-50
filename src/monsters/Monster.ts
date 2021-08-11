import { Sprite } from "pixi.js";
import app from "../application";
import MapItem from "../MapItem";

export default class Monster extends MapItem {
  name: string;
  hp: number;
  attack: number;
  defense: number;
  money: number;
  img: string;

  constructor({ name, hp, attack, defense, money, img }: Monster) {
    super(new Sprite(app.loader.resources[img].texture));

    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.money = money;
    this.img = img;
  }
}
