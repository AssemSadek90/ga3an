import { Component, Input } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Meal, Food, Drink } from '../../shared/models/MenuItem/MenuItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-parent',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './card-parent.component.html',
  styleUrl: './card-parent.component.css'
})
export class CardParentComponent {
  @Input() filterNum : number = 0;
  public foods : Food[] = [
    new Food('Burger', 5.99, 550, 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg', 'Juicy beef burger with lettuce and tomato'),
    new Food('Pizza', 8.99, 700, 'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Cheesy%20Herb%20Garlic%20Pizza.jpg', 'Cheese pizza with a crispy crust'),
    new Food('Salad', 4.99, 150, 'https://www.primaverakitchen.com/wp-content/uploads/2019/12/Easy-Chopped-Chicken-Salad-Meal-Prep-Primavera-Kitchen-2.jpg', 'Fresh garden salad with a variety of vegetables'),
    new Food('Pasta', 7.99, 600, 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_1920,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg', 'Creamy Alfredo pasta with chicken'),
    new Food('Taco', 3.99, 300, 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg', 'Spicy beef taco with salsa and cheese')
  ];

  public drinks: Drink[] = [
    new Drink('Cola', 1.99, 150, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Glass_of_Cola.jpg/800px-Glass_of_Cola.jpg', 'Refreshing cola drink'),
    new Drink('Lemonade', 2.49, 120, 'https://cdn.loveandlemons.com/wp-content/uploads/2022/06/lemonade.jpg', 'Sweet and tangy lemonade'),
    new Drink('Coffee', 2.99, 5, 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg', 'Hot brewed coffee'),
    new Drink('Milkshake', 3.99, 350, 'https://www.cottagedelight.co.uk/wp-content/uploads/2020/06/Milkshakes-6-1.jpg', 'Creamy chocolate milkshake'),
    new Drink('Water', 0.99, 0, 'https://assets.sainsburys-groceries.co.uk/gol/7856691/1/640x640.jpg', 'Pure spring water')
  ];

  public meals: Meal[] = [
    new Meal(
      'Burger Meal',
      9.99,
      1000,
      'https://img.freepik.com/premium-photo/tasty-burger-with-french-fries-fast-food-meal-hamburger-american-delicious-snack_124507-10882.jpg',
      'Burger with fries and a drink',
      [this.foods[0], this.foods[3], this.drinks[0]]
    ),
    new Meal(
      'Pizza Meal',
      11.99,
      1250,
      'https://www.papizza.co.uk/wp-content/uploads/PaPizza_Combo_1000x1000_Family-Large-Meal-1.jpg',
      'Pizza with salad and a drink',
      [this.foods[1], this.foods[2], this.drinks[1]]
    ),
    new Meal(
      'Salad Meal',
      8.99,
      350,
      'https://cafedelites.com/wp-content/uploads/2017/06/Grilled-Chicken-Cobb-Caesar-Salad-IMAGE-HERO-111.jpg',
      'Salad with a drink',
      [this.foods[2], this.drinks[4]]
    ),
    new Meal(
      'Pasta Meal',
      12.99,
      1300,
      'https://i.insider.com/561bd6dcbd86ef135c8b5f4b?width=1120&format=jpeg',
      'Pasta with a drink and dessert',
      [this.foods[3], this.drinks[2]]
    ),
    new Meal(
      'Taco Meal',
      7.99,
      600,
      'https://reluctantentertainer.com/wp-content/uploads/2019/05/Easy-Taco-Recipe-Dinner-Board-4.jpg',
      'Tacos with a drink',
      [this.foods[4], this.drinks[3]]
    )
  ];

  get menuItems(){
    if (this.filterNum === 1)
      return this.foods
    else if (this.filterNum === 2)
      return this.drinks
    else if (this.filterNum === 3)
      return this.meals
    else
    return[...this.foods, ...this.drinks, ...this.meals]
  }
}
