import { Injectable } from '@angular/core';
import {qualityDescription, qualityList} from '../staticData';
import {Observable, of} from 'rxjs';
import {IQuality, IQualitySection} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class QualityDataService {
  qualityList$: Observable<IQuality[]> = of(qualityList);
  qualityDescription$: Observable<IQualitySection> = of(qualityDescription);
}
