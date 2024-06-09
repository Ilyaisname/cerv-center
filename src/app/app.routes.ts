import {Routes} from '@angular/router';
import {MainComponent} from '../pages/main/main.component';
import {AboutComponent} from '../pages/about/about.component';
import {CatalogComponent} from '../pages/catalog/catalog.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
