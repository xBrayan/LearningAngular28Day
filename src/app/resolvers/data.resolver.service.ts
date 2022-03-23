import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

const departaments = ['Marketing', 'Sales', 'RRHH', 'Other'];

@Injectable({ providedIn: 'root' })
export class DataResolverService implements Resolve<any> {
  resolve(): Observable<any> {
    //TODO: CALL SERVICE
    //of convierte array a observable
    return of(departaments);
  }
}
