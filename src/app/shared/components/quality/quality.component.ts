import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TuiIconModule} from '@taiga-ui/experimental';
import {IQuality} from '../../interfaces';
import {SafePipe} from '../../pipes/safe.pipe';

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TuiIconModule,
    SafePipe
  ],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.less'
})
export class QualityComponent {
  @Input() qualityList: IQuality[] | null | undefined;
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  @Input() imagePath?: string | undefined = undefined;
}
