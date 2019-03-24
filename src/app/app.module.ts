import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardComponent } from './cardlist/card/card.component';
import { AddformComponent } from './addform/addform.component';
import { CardsFilter } from './cardlist/cards-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardlistComponent,
    CardComponent,
    AddformComponent,
    CardsFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
