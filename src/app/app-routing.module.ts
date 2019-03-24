import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';
import { AddformComponent } from './addform/addform.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/card-list', pathMatch: 'full' },
  {path: 'card-list', component: CardlistComponent},
  {path: 'add', component: AddformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
