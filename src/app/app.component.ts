import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { CardParentComponent } from './card-parent/card-parent.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, BannerComponent, FilterBarComponent, CardParentComponent, ItemCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedFilter : number = 0;
  onChangeFilter = (filter: number) =>{
    this.selectedFilter = filter
    console.log(this.selectedFilter)
  }
}
