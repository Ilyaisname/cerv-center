import { Injectable } from '@angular/core';
import {IStatistic} from '../interfaces';
import {statistics} from '../staticData';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticDataService {
  statisticData$: Observable<IStatistic[]> = of(statistics);
}
