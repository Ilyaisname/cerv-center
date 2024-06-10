import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiTabsModule} from '@taiga-ui/kit';
import {TuiDataListModule, TuiHostedDropdownModule, TuiModeModule, TuiSvgModule} from '@taiga-ui/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {NavigationService} from '../shared/services/navigation.service';

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
    TuiModeModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly tabs = inject(NavigationService).getTabs();

  activeElement = String(this.tabs[0].name);

  get activeItemIndex(): number {
    return this.tabs.findIndex(tab => tab.name === this.activeElement) || 0;
  }

  onClick(activeElement: string): void {
    this.activeElement = activeElement;
  }
}
