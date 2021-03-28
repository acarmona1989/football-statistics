import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/services/card.model';
import { RedCardService } from 'src/app/services/redcard.services';

@Component({
  selector: 'app-redcard-list',
  templateUrl: './redcard-list.component.html',
  styleUrls: ['./redcard-list.component.css']
})
export class RedcardListComponent implements OnInit {
  cards: Card[] = [];
  cardsListSub: Subscription;

  constructor(private redCardService: RedCardService) { 
    this.cardsListSub = new Subscription();
  }

  ngOnInit(): void {
    this.cardsListSub = this.redCardService.fetchRedCards()
              .subscribe(
                cards=> {
                  this.cards = cards;
                  console.log(this.cards);
                }
              )
  }

  ngOnDestroy(): void {
    this.cardsListSub.unsubscribe();
  }

}
