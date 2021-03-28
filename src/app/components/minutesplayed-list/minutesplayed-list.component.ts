import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MinutesPlayed } from 'src/app/services/minutesplayed.model';
import { MinutesPlayedService } from 'src/app/services/minutesplayed.service';

@Component({
  selector: 'app-minutesplayed-list',
  templateUrl: './minutesplayed-list.component.html',
  styleUrls: ['./minutesplayed-list.component.css']
})
export class MinutesplayedListComponent implements OnInit {
  minutesPlayed: MinutesPlayed[] = [];
  minutesListSub: Subscription;

  constructor(private minutesPlayedService: MinutesPlayedService) { }

  ngOnInit(): void {
    this.minutesListSub = this.minutesPlayedService.fetchMinutesPlayed()
      .subscribe(
        minutes => {
          this.minutesPlayed = minutes;
        }
      )
  }

  ngOnDestroy(): void {
    this.minutesListSub.unsubscribe();
  }
}
