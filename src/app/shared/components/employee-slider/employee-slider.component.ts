import {Component, inject} from '@angular/core';
import {TuiCarouselModule, TuiIslandModule, TuiPaginationModule} from '@taiga-ui/kit';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {PostSliderDataService} from '../../services/post-slider-data.service';

@Component({
  selector: 'app-employee-slider',
  standalone: true,
  imports: [
    TuiPaginationModule,
    TuiCarouselModule,
    TuiIslandModule,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './employee-slider.component.html',
  styleUrl: './employee-slider.component.less'
})
export class EmployeeSliderComponent {
  protected readonly inBrowser = window;
  index = 0;
  readonly itemsCount = 3;
  readonly items = inject(PostSliderDataService).getEmployeeData();

  get rounded(): number {
    return Math.floor(this.index / this.itemsCount);
  }

  onIndex(index: number): void {
    this.index = index * this.itemsCount;
  }
}
