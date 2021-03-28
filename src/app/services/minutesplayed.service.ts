import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map, retry } from "rxjs/operators";
import { Response } from './shared/response.model';
import { MinutesPlayed } from './minutesplayed.model';

@Injectable({
    providedIn: 'root'
})
export class MinutesPlayedService {
    constructor(
        private httpClient: HttpClient) {
    }

    fetchMinutesPlayed(): Observable<MinutesPlayed[]> {
        return this.httpClient
            .get<Response>(environment.apiUrl + 'statistics/redcards')
            .pipe(retry(1), map(responseData => {
                const minutesPlayedArray: MinutesPlayed[] = [];

                if (responseData.hasOwnProperty('data')) 
                {
                    minutesPlayedArray.push(...responseData.data);
                }
                return minutesPlayedArray;

            }));
    }
}