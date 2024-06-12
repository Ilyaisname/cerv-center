import {Component, Inject, inject, Injector} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {TuiButtonModule, TuiDialogService} from '@taiga-ui/core';
import {TuiIconModule} from '@taiga-ui/experimental';
import {TuiLetModule} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {
  AdvantagesComponent,
  ContactsComponent,
  GreetingsComponent,
  QualityComponent,
  StatisticComponent
} from '../../shared/components';
import {
  IAdvantage,
  IAdvantageSection,
  IContacts,
  IGreetings,
  IQuality,
  IQualitySection,
  IStatistic
} from '../../shared/interfaces';
import {ContactsDataService} from '../../shared/services';
import {GreetingsDataService} from '../../shared/services/greetings-data.service';
import {AdvantageDataService} from '../../shared/services/advantage-data.service';
import {QualityDataService} from '../../shared/services/quality-data.service';
import {StatisticDataService} from '../../shared/services/statistic-data.service';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {DialogComponent} from '../../shared/components';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TuiButtonModule,
    TuiIconModule,
    ContactsComponent,
    TuiLetModule,
    AsyncPipe,
    GreetingsComponent,
    AdvantagesComponent,
    QualityComponent,
    StatisticComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent {
  greetingsData$: Observable<IGreetings> = inject(GreetingsDataService).getGreetingsDataForMain();
  contactsData$: Observable<IContacts> = inject(ContactsDataService).getContacts();
  advantagesData$: Observable<IAdvantage[]> = inject(AdvantageDataService).advantages$;
  advantagesDescription$: Observable<IAdvantageSection> = inject(AdvantageDataService).advantageSectionDescription$;
  qualityData$: Observable<IQuality[]> = inject(QualityDataService).qualityList$;
  qualityDescription$: Observable<IQualitySection> = inject(QualityDataService).qualityDescription$;
  statistics$: Observable<IStatistic[]> = inject(StatisticDataService).statisticData$;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) {}

  showDialog(): void {
    this.dialog.subscribe({
      next: data => {
        console.info(data);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }

  private readonly dialog = this.dialogs.open<unknown>(
    new PolymorpheusComponent(DialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Оставить завку на ремонт',
    },
  );
}
