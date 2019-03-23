import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card.model';
import { CardlistService } from '../cardlist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() carditem: Card;
  @Output() cardDeletedEvent: EventEmitter<any> = new EventEmitter();

  constructor(private cardlistService: CardlistService) { }

  ngOnInit() {
  }

  sendDeleteCard(card) {
    this.cardDeletedEvent.emit(card);
  }

}
