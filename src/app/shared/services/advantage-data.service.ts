import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {advantages, advantageSectionDescription} from '../staticData';
import {IAdvantage, IAdvantageSection} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdvantageDataService {
  advantages$: Observable<IAdvantage[]> = of(advantages);
  advantageSectionDescription$: Observable<IAdvantageSection> = of(advantageSectionDescription);
}
