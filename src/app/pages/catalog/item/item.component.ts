import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {ICatalogItem} from '../../../shared/interfaces';
import {TuiButtonModule} from '@taiga-ui/core';

@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiMoneyModule,
    TuiButtonModule
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.less'
})
export class ItemComponent {
  @Input() item: ICatalogItem | undefined;
  @Output() repairRequest = new EventEmitter<ICatalogItem>();

  sentRepairRequest() {
    this.repairRequest.emit(this.item);
  }
}
