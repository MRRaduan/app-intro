import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardlistService } from '../cardlist/cardlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {

  constructor(private cardlistService: CardlistService,
              private router: Router) { }

  nameInput: string;
  ageInput: string;
  emailInput: string;

  ngOnInit() {
  }

  addCard() {
    const newCard = new Card(9, this.nameInput, this.ageInput, this.emailInput);
    this.cardlistService.addCard(newCard)
      .then(resolve => {
        this.router.navigate(['']);
      });
  }

}
