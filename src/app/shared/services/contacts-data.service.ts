import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IContacts} from '../interfaces';
import {contacts} from '../staticData';

@Injectable({
  providedIn: 'root'
})
export class ContactsDataService {
  constructor() { }

  getContacts(): Observable<IContacts> {
    return of(contacts);
  }
}
