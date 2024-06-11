import {Component, Input} from '@angular/core';
import {IStatistic} from '../../interfaces';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.less'
})
export class StatisticComponent {
  @Input() statisticList: IStatistic[] | null | undefined;
}
