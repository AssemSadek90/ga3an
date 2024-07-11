import { Food } from "../MenuItem/MenuItem";
import { Drink } from "../MenuItem/MenuItem";
import { Meal } from "../MenuItem/MenuItem";
export class Cart{
    constructor(public itemList?: Food[] | Drink[] | Meal[]){
    }
    addItemToCart(){}
    removeItemFromCart(){}
}