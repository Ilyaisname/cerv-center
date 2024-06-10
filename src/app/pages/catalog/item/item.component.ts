import {Component, Input} from '@angular/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {ICatalogItem} from '../../../shared/interfaces';

@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiMoneyModule
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.less'
})
export class ItemComponent {
  @Input() item: ICatalogItem | undefined;
}
