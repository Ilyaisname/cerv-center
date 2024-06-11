import {Component, Input} from '@angular/core';
import {TuiIconModule} from '@taiga-ui/experimental';
import {AsyncPipe} from '@angular/common';
import {IAdvantage} from '../../interfaces';
import {SafePipe} from '../../pipes/safe.pipe';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [
    TuiIconModule,
    AsyncPipe,
    SafePipe
  ],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.less'
})
export class AdvantagesComponent {
  @Input() advantages: IAdvantage[] | null | undefined;
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
}
