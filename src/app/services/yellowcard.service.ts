import { Card } from "./card.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export class YelloCardService{
    yellowCards : Card[];

    constructor(
        private httpClient: HttpClient
    ){

    }

    fetchYellowCards():Observable<Card[]>{
        return this.httpClient
            .get(environment.apiUrl + 'statistics/yellowcards')
            .pipe(map())
    }

}