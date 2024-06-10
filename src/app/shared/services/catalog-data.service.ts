import { Injectable } from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {ICatalogDescription, ICatalogItem} from '../interfaces';
import {catalogDescription, catalogsItems} from '../staticData/catalog';
import {ArrayHelpers} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class CatalogDataService {
  catalogItems$: Observable<ICatalogItem[]> = of(catalogsItems).pipe(
    map((items: ICatalogItem[]) => ArrayHelpers.addIdFields(items) as ICatalogItem[])
  );
  constructor() {}

  getBlockDescription(): ICatalogDescription {
    return catalogDescription;
  }
}
