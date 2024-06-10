import {Component, inject} from '@angular/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {ItemComponent} from './item/item.component';
import {TuiLetModule} from '@taiga-ui/cdk';
import {catalogDescription} from '../../shared/staticData/catalog';
import {AsyncPipe} from '@angular/common';
import {CatalogDataService} from '../../shared/services/catalog-data.service';
import {GreetingsComponent} from '../../shared/components';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiMoneyModule,
    ItemComponent,
    TuiLetModule,
    AsyncPipe,
    GreetingsComponent
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.less'
})
export class CatalogComponent {
  readonly catalogItems$ = inject(CatalogDataService).catalogItems$;
  protected readonly catalogDescription = catalogDescription;
}
