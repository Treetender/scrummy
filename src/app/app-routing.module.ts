import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedCardComponent } from './selected-card/selected-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'cardlist', component: CardListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/cardlist', pathMatch: 'full' },
  { path: 'card/:text', component: SelectedCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
