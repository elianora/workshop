import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScryfallCatalog } from '../models/scryfall-catalog.model';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScryfallService {
    baseUrl = 'https://api.scryfall.com';
    endpoints = {
        autocomplete: `${this.baseUrl}/cards/autocomplete`,
    };

    constructor(private http: HttpClient) {}

    autocomplete(cardName: string) {
        return this.http
            .get<ScryfallCatalog>(this.endpoints.autocomplete, {
                params: { q: cardName },
            });
    }
}
