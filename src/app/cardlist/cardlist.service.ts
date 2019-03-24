import { Card } from '../models/card.model';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root',
})
export class CardlistService {
  private cardlist: Card[] = [
    new Card(1, 'Matheusao', '21', 'matheusao@audaz.com.br'),
    new Card(2, 'Marcelinho', '21', 'marcelinho@audaz.com.br'),
    new Card(3, 'Brunão', '31', 'brunao@audaz.com.br'),
  ];

  getCards() {
    return this.cardlist;
  }

  getCard(id: number): object {
    const card = this.cardlist.find(card => {
      return card.id === id;
    });
    return card;
  }

  deleteCard(card: Card) {
    const cardIndex = this.cardlist.findIndex(obj => obj.id === card.id);
    this.cardlist.splice(cardIndex, 1);
  }

  addCard(newCard: Card) {
    return new Promise(
      (resolve, reject) => {
        resolve(this.cardlist.push(newCard));
      }
    )
  }

  findCard(value) {
    // this.cardlist.map(x => {
    //   return x.filter(y=>y.toLowerCase().indexOf(value.toLowerCase())>-1);
    // });
  }
}
