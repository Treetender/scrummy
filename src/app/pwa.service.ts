import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent;

  constructor(private swUpdate: SwUpdate) { 
    this.swUpdate.available.subscribe(_ => {
        window.location.reload();
    });

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    })
  }
}
