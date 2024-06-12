import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {TuiButtonModule} from '@taiga-ui/core';
import {SafePipe} from '../../pipes/safe.pipe';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TuiButtonModule,
    SafePipe,
    NgClass
  ],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.less'
})
export class GreetingsComponent implements OnInit {
  @Input({required: true}) headerText: string = '';
  @Input({required: true}) text: string = '';
  @Input() imagePath: string | undefined = undefined;
  @Input() repairRequest: boolean | undefined = false;

  @Output() newRepairRequest: EventEmitter<unknown> = new EventEmitter();

  companyNameStyleGreed: Record<string, boolean> = {};

  ngOnInit() {
    this.setCompanyNameStyleGreed();
  }

  private setCompanyNameStyleGreed() {
    this.companyNameStyleGreed = {
      'tui-col_lg-7': !!this.imagePath,
      'tui-col_md-7': !!this.imagePath,
      'tui-col_lg-10': !this.imagePath,
      'tui-col_md-10': !this.imagePath,
    }
  }

  sentRepairRequest(event: unknown) {
    this.newRepairRequest.emit(event);
  }
}
