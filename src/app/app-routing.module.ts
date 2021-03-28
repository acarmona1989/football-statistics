import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YellowcardListComponent } from './components/yellowcard-list/yellowcard-list.component';
import { RedcardListComponent } from './components/redcard-list/redcard-list.component';
import { MinutesplayedListComponent } from './components/minutesplayed-list/minutesplayed-list.component';

const routes: Routes = [
  {path : 'statistics/yellowcard', component : YellowcardListComponent},
  {path : 'statistics/redcard', component : RedcardListComponent},
  {path : 'statistics/minutesplayed', component : MinutesplayedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
