import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScryfallCatalog } from '../models/scryfall-catalog.model';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScryfallCard } from '@core/models/scryfall-card.model';

@Injectable({
    providedIn: 'root',
})
export class ScryfallService {
    baseUrl = 'https://api.scryfall.com';
    endpoints = {
        autocomplete: `${this.baseUrl}/cards/autocomplete`,
        cardByName: `${this.baseUrl}/cards/named`
    };

    constructor(private http: HttpClient) {}

    /**
     * @param cardName The card name to look up
     * @returns A list of up to 20 cards matching the card name
     */
    autocomplete(cardName?: string | null) {
        if (!cardName) {
            return of([]);
        }

        return this.http
            .get<ScryfallCatalog>(this.endpoints.autocomplete, {
                params: { q: cardName },
            })
            .pipe(map((result) => result.data));
    }

    getCard(cardName: string) {
        return this.http.get<ScryfallCard>(this.endpoints.cardByName, {
            params: {
                exact: cardName
            }
        });
    }
}
