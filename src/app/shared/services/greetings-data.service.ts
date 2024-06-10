import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IGreetings} from '../interfaces';
import {forAbout, forMain} from '../staticData';

@Injectable({
  providedIn: 'root'
})
export class GreetingsDataService {
  getGreetingsDataForMain(): Observable<IGreetings> {
    return of(forMain);
  }

  getGreetingsDataForAbout(): Observable<IGreetings> {
    return of(forAbout);
  }
}
