import { Injectable } from '@angular/core';
import {naviTabs} from '../staticData';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  getTabs() {
    return naviTabs;
  }
}
