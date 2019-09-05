import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.css']
})
export class SelectedCardComponent implements OnInit {
  private textSubject$: BehaviorSubject<string> = new BehaviorSubject('');
  readonly text$ = this.textSubject$.asObservable();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => this.textSubject$.next(param.text)); 
  }

}
