import {Component, inject} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';
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
}
