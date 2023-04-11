import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScryfallCatalog } from '../models/scryfall-catalog.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ScryfallService {
    baseUrl = 'https://api.scryfall.com';
    endpoints = {
        autocomplete: `${this.baseUrl}/cards/autocomplete`,
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
}
