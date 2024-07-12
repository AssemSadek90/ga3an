import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  public items : string[] = ["All","Food", "Drink", "Meals"]
}
