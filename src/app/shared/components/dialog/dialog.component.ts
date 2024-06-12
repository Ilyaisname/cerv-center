import {Component, Inject} from '@angular/core';
import {TuiButtonModule, TuiDialogContext, TuiDialogService, TuiTextfieldControllerModule} from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiInputModule,
    TuiAutoFocusModule,
    TuiTextfieldControllerModule,
    FormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.less'
})
export class DialogComponent {
  name: string | null = null;
  lastName: string | null = null;
  phone: string | null = null;
  email: string | null = null;
  question: string | null = null;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<unknown, unknown>,) {
  }

  get hasValue() {
    return this.hasNameOrLastName() && this.hasContact() && this.question;
  }

  submit(): void {
    if (this.hasNameOrLastName() && this.hasContact() && this.question) {
      this.context.completeWith(this.getData());
    }
  }

  private hasNameOrLastName(): boolean {
    return !!this.name || !!this.lastName;
  }

  private hasContact(): boolean {
    return !!this.email || !!this.phone;
  }

  private getData() {
    return {
      name: this.name,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      question: this.question
    }
  }
}
