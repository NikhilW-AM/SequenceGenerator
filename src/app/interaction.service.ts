import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private _countNumber = new Subject<Object>();
  count$ = this._countNumber.asObservable();

  constructor() {}

  sendMessage(value: any) {
    this._countNumber.next(value);
  }
}
