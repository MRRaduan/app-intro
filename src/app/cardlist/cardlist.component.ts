import { Component, OnInit } from '@angular/core';
import { CardlistService } from './cardlist.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {

  constructor(private cardlistService: CardlistService) { }

  public cards: Card[];
  searchTerm: string;

  ngOnInit() {
    this.cards = this.cardlistService.getCards();
  }

  receiveDeleteCard(card) {
    this.cardlistService.deleteCard(card);
  }

}
