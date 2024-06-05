import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiTabsModule} from '@taiga-ui/kit';
import {TuiDataListModule, TuiHostedDropdownModule, TuiModeModule, TuiSvgModule} from '@taiga-ui/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TuiTabsModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    TuiDataListModule,
    NgForOf,
    TuiActiveZoneModule,
    NgIf,
    TuiModeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly tabs = [
    'Главная',
    'О Нас',
    'Новости',
    'Каталог услуг',
  ];

  activeElement = String(this.tabs[0]);

  get activeItemIndex(): number {
    return this.tabs.indexOf(this.activeElement);
  }

  onClick(activeElement: string): void {
    this.activeElement = activeElement;
  }
}
