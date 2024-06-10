import {Component, inject} from '@angular/core';
import {TuiCarouselModule, TuiIslandModule, TuiPaginationModule} from '@taiga-ui/kit';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {PostSliderDataService} from '../../services/post-slider-data.service';
import {IPost} from '../../interfaces';

@Component({
  selector: 'app-post-slider',
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiCarouselModule,
    TuiPaginationModule,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './post-slider.component.html',
  styleUrl: './post-slider.component.less'
})
export class PostSliderComponent {
  index = 2;
  inBrowser = window;

  readonly items: IPost[] = inject(PostSliderDataService).getPosts();
}
