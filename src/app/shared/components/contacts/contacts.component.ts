import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ArrayHelpers} from '../../helpers';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  @Input() address: string | undefined = '';
  @Input() workTime: string | undefined = '';
  @Input({transform: arrayTransform }) phoneNumbers: Array<{id: string, phoneNumber: string}> | undefined = [];
  @Input() mail: string | undefined = '';
  @Input() imagePath: string | undefined = '';
  @Input() workMode: string | undefined = '';
}

function arrayTransform(array: any) {
  return ArrayHelpers.addIdFields(array, 'phoneNumber');
}
