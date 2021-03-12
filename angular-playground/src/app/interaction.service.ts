import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _parentMessageSource = new Subject<string>();
  parentMessage$ = this._parentMessageSource.asObservable();
  constructor() { }

  sendMessage(message:string) {
    this._parentMessageSource.next(message);
  }
}
