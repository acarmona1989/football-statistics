import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/services/card.model';
import { YellowCardService } from 'src/app/services/yellowcard.service';

@Component({
  selector: 'app-yellowcard-list',
  templateUrl: './yellowcard-list.component.html',
  styleUrls: ['./yellowcard-list.component.css']
})
export class YellowcardListComponent implements OnInit {
  cards: Card[] = [];
  cardsListSub: Subscription;

  constructor(private yellowCardService: YellowCardService) { 
    this.cardsListSub = new Subscription();
  }

  ngOnInit(): void {
    this.cardsListSub = this.yellowCardService.fetchYellowCards()
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
