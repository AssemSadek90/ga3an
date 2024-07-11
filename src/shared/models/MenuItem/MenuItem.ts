export class Food{
    constructor( public name: string,public  price: number,public  calories: number,public  image: string,public  description: string){
    }
    foods : Food[] = [];
}

export class Drink{
    constructor( public name: string,public  price: number,public  calories: number,public  image: string,public  description: string){
    }
    drinks: Drink[] = [];
}

export class Meal{
    constructor( public name: string,public  price: number,public  calories: number,public  image: string,public  description: string, public components: Food[] | Drink[]){
        
    }
    meals: Meal[] = [];
}