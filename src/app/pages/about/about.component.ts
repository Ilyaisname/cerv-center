import {Component, inject} from '@angular/core';
import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import { SafePipe } from '../../shared/pipes/safe.pipe';
import {ContactsComponent, EmployeeSliderComponent, PostSliderComponent, GreetingsComponent, TeamComponent} from '../../shared/components';
import {IContacts, IGreetings} from '../../shared/interfaces';
import {GreetingsDataService} from '../../shared/services/greetings-data.service';
import {ContactsDataService} from '../../shared/services';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    GreetingsComponent,
    PostSliderComponent,
    TeamComponent,
    NgTemplateOutlet,
    TuiButtonModule,
    AsyncPipe,
    TuiLetModule,
    SafePipe,
    EmployeeSliderComponent,
    ContactsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {
  greetingsData$: Observable<IGreetings> = inject(GreetingsDataService).getGreetingsDataForAbout();
  contactsData$: Observable<IContacts> = inject(ContactsDataService).getContacts();
  headerFirstBlock = `Наши ценности и миссия`;
  headerSecondBlock = `Добро пожаловать в нашу команду`;
  textFirstBlock = `
    <p style="font-weight: bold">
     Мы используем только сертифицированные инструменты и оригинальные запчасти.<br>
     Каждый ремонт проходит строгий контроль качества<br>
     Вы всегда будете знать, за что платите<br>
     Cтараемся учитывать все ваши потребности и пожелания
    </p>
  `;
  textSecondBlock = `В сервисном центре Device мы верим, что наши сотрудники — это наше самое большое преимущество.
  Мы стремимся создать рабочую среду, в которой каждый чувствует себя ценным и имеет возможности для профессионального роста и развития`;
}
