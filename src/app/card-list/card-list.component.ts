import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Observable<String[]>;

  constructor(private settingsService: SettingsService) { 
    this.cards = this.settingsService.getCardList$();
  }

  ngOnInit() {
    
  }

}
