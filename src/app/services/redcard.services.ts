import { Injectable } from '@angular/core';
import { Card } from "./card.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map, retry } from "rxjs/operators";
import { Response } from './shared/response.model';

@Injectable({
    providedIn: 'root'
})
export class RedCardService {
    constructor(
        private httpClient: HttpClient) {
    }

    fetchRedCards(): Observable<Card[]> {
        return this.httpClient
            .get<Response>(environment.apiUrl + 'statistics/redcards')
            .pipe(retry(1), map(responseData => {
                const cardsArray: Card[] = [];

                if (responseData.hasOwnProperty('data')) 
                {
                    cardsArray.push(...responseData.data);
                }
                return cardsArray;

            }));
    }
}