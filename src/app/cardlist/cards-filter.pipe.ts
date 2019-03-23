import { PipeTransform, Pipe } from '@angular/core';
import { Card } from '../models/card.model';

@Pipe({
  name: 'cardsFilter'
})
export class CardsFilter implements PipeTransform {
  transform(cards: Card[], searchTerm: string): Card[] {
    if (!cards || !searchTerm) {
      return cards;
    }
    return cards.filter(card =>
      card.name.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}

