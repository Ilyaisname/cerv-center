import { Injectable } from '@angular/core';
import {naviTabs} from '../staticData/naviTabs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getTabs() {
    return naviTabs;
  }
}
