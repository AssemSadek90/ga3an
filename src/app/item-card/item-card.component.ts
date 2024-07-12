import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal, Food, Drink } from '../../shared/models/MenuItem/MenuItem';
@Component({
  selector: 'item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent{
  @Input() public menuItem! : Food | Drink | Meal;
}
