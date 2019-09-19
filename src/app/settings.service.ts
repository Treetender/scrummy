import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private cardListSet$ = new BehaviorSubject<string[]>(['1/2','1','2','3','5','8','13','20','40','100', '?', 'ESC', '∞']);

  constructor() {
    //read the last file from the settings side of things
   }

  getCardList$(): Observable<String[]> {
    return this.cardListSet$.asObservable();
  }

  setCardList(cards: string[]) {
    this.cardListSet$.next(cards);
  }


}
