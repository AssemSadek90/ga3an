import { Injectable } from '@angular/core';
export class Food{
    constructor( public name: string,public  price: number,public  calories: number,public  image: string,public  description: string){
    }
}
export class Drink{
    constructor( public name: string,public  price: number,public  calories: number,public  image: string,public  description: string){
    }
}
export class Meal{
    constructor( public name: string,public  price: number,public  calories: number,public  image: string,public  description: string, public components: Food[] | Drink[]){
    }
}