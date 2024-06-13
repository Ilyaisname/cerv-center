import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiTabsModule} from '@taiga-ui/kit';
import {TuiDataListModule, TuiHostedDropdownModule, TuiModeModule, TuiSvgModule} from '@taiga-ui/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
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
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly tabs = inject(NavigationService).getTabs();
}
