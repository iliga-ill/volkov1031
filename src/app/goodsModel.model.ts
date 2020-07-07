
export interface MyGood {
  id: number;
  name: string;
  cost: number;
  producer?:string;
  category:string;
  weight:number;
  number: number;
  articul?: string;
}

export enum MyCategory {
  Frukt,
  Ovosh,
  Meat,
  Egg,
}