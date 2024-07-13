import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  @Input() filterNumberBar : number = 0;
  @Output() filterChange = new EventEmitter<number>();
  public selectedStyle = "bg-red";
  public items : string[] = ["All","Food", "Drink", "Meals"]
  applyFilter = (i : number) => {
    this.filterNumberBar = i;
    this.filterChange.emit(this.filterNumberBar)
  }
}
