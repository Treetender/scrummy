import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scrum-card',
  inputs: ['text'],
  templateUrl: './scrum-card.component.html',
  styleUrls: ['./scrum-card.component.css']
})
export class ScrumCardComponent implements OnInit {
  text: string|null = null;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['card', this.text]);
  }

}
