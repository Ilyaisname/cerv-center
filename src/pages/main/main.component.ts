import {Component, inject} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiIconModule} from '@taiga-ui/experimental';
import {ContactsComponent} from '../../shared/components/contacts/contacts.component';
import {ContactsDataService} from '../../shared/services/contacts-data.service';
import {TuiLetModule} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {IContacts} from '../../shared/interfaces';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TuiButtonModule,
    TuiIconModule,
    ContactsComponent,
    TuiLetModule,
    AsyncPipe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.less'
})
export class MainComponent {
  public advantages: IAdvantage[] = [
    {
      id: 0,
      icon: 'tuiIconFileTextLarge',
      header: 'Широкий спектр услуг',
      description: 'Мы предлагаем комплексные решения для всех типов ПК и ноутбуков. диагностики и устранения неисправностей до модернизации и оптимизации систем',
    },
    {
      id: 1,
      icon: 'tuiIconZapLarge',
      header: 'Быстрое и качественное обслуживание',
      description: 'Мы ценим ваше время и стремимся выполнять ремонт в кратчайшие сроки. Качество нашей работы подтверждено многочисленными положительными отзывами клиентов',
    },
    {
      id: 2,
      icon: 'tuiIconPocketLarge',
      header: 'Гарантия на услуги',
      description: 'Мы предоставляем гарантию на все виды выполненных работ и установленные комплектующие.\n' +
        'Вы можете быть уверены в надежности и долговечности нашего ремонта.',
    },
    {
      id: 3,
      icon: 'tuiIconThumbsUpLarge',
      header: 'Доступные цены и прозрачность',
      description: 'Мы предлагаем конкурентоспособные цены на все виды услуг.\n' +
        'Никаких скрытых платежей – вы всегда знаете, за что платите.',
    }
  ]
  public qualityList: IQuality[] = [
    {
      id: 0,
      icon: 'tuiIconCheckLarge',
      description: 'Большой выбор матриц для разных моделей ноутбуков',
    },
    {
      id: 1,
      icon: 'tuiIconCheckLarge',
      description: 'В нашем ассортименте всегда найдется качественная, подходящая под конкретную модель ноутбука клавиатура',
    },
    {
      id: 2,
      icon: 'tuiIconCheckLarge',
      description: 'Высококачественные шлейфы для подключения различных компонентов ноутбука',
    },
    {
      id: 3,
      icon: 'tuiIconCheckLarge',
      description: 'Большой выбор термопаст для процессоров и видеокарт, обладающих повышенной теплопроводностью',
    },
  ];
  public statistics: IStatistic[] = [
    {
    id: 0,
    statisticNumber: '200 тысяч',
    about: 'ремонтов в год',
    },
    {
      id: 1,
      statisticNumber: '5 лет',
      about: 'на рынке',
    },
    {
      id: 2,
      statisticNumber: '90 дней',
      about: 'Официальная гарантия',
    },
    {
      id: 3,
      statisticNumber: '3 года',
      about: 'Средний опыт инженера',
    },
  ];
  public contactsData$: Observable<IContacts> = inject(ContactsDataService).getContacts();


}

export interface IAdvantage {
  id: number;
  icon: string;
  header: string;
  description: string;
}

export interface IQuality {
  id: number;
  icon: string;
  description: string;
}

export interface IStatistic {
  id: number;
  statisticNumber: string;
  about: string;
}
