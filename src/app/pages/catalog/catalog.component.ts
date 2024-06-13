import {Component, Inject, inject, Injector, OnDestroy} from '@angular/core';
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {ItemComponent} from './item/item.component';
import {TuiLetModule} from '@taiga-ui/cdk';
import {catalogDescription} from '../../shared/staticData';
import {AsyncPipe} from '@angular/common';
import {CatalogDataService} from '../../shared/services/catalog-data.service';
import {GreetingsComponent} from '../../shared/components';
import {ICatalogItem} from '../../shared/interfaces';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {RepairRequestFormComponent} from './repair-request-form/repair-request-form.component';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiMoneyModule,
    ItemComponent,
    TuiLetModule,
    AsyncPipe,
    GreetingsComponent,
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.less'
})
export class CatalogComponent implements OnDestroy{
  readonly catalogItems$ = inject(CatalogDataService).catalogItems$;
  protected readonly catalogDescription = catalogDescription;
  private destroyed$ = new Subject<void>();

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  newRepairRequest(event: ICatalogItem) {
    this.dialogs.open<{[key: string]: string}>(
      new PolymorpheusComponent(RepairRequestFormComponent, this.injector),
      {
        data: event,
        dismissible: true,
        label: 'Оставить завку на ремонт',
      },
    ).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: data => {
        console.info('new repairRequest', data);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    })
  }
}
