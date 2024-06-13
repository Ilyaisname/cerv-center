import {Component, Inject} from '@angular/core';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiDialogContext, TuiHintModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule, TuiInputNumberModule, TuiInputPhoneModule, TuiTextareaModule} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {ICatalogItem} from '../../../shared/interfaces';
import {FormsModule} from '@angular/forms';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';

@Component({
  selector: 'app-repair-request-form',
  standalone: true,
  imports: [
    TuiAutoFocusModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiTextareaModule,
    TuiCurrencyPipeModule,
    TuiInputNumberModule,
    TuiHintModule,
    TuiInputPhoneModule
  ],
  templateUrl: './repair-request-form.component.html',
  styleUrl: './repair-request-form.component.less'
})
export class RepairRequestFormComponent {
  title: string | null = null;
  price: number | null = null;
  contactName: string | null = null;
  dopInfo: string | null = null;
  phoneNumber: string | null = null;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<{[key: string]: string}, ICatalogItem>) {
    this.prepareForm(this.context.data);
  }

  get hasValue(): boolean {
    return this.isContactName() && this.isPhoneNumber();
  }

  get data(): {[key: string]: string}  {
    return {
      title: this.title!,
      price: this.price?.toString()!,
      contactName: this.contactName!,
      dopInfo: this.dopInfo!,
      phoneNumber: this.phoneNumber!,
    };
  }

  prepareForm(data: ICatalogItem) {
      this.title = data.title;
      this.price = data.price;
  }

  submit(): void {
    if (this.isContactName() && this.isPhoneNumber()) {
      this.context.completeWith(this.data);
    }
  }

  private isContactName(): boolean {
    return !!this.contactName && this.contactName.trim().length > 0;
  }

  private isPhoneNumber() {
    return !!this.phoneNumber && this.phoneNumber.trim().length > 0;
  }
}
