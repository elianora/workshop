import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { ScryfallService } from './scryfall.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

describe('ScryfallService', () => {
    let service: ScryfallService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });

        service = TestBed.inject(ScryfallService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should make a GET request when autocompleting with non-empty input', () => {
        service.autocomplete('thal').pipe(take(1)).subscribe();
        const req = httpTestingController.expectOne(
            `${service.endpoints.autocomplete}?q=thal`
        );
        expect(req.request.method).toEqual('GET');
        req.flush({ uri: '', total_values: 0, data: [] });
    });

    it('should not make any calls to the API when empty string or null is provided', () => {
        service.autocomplete('').pipe(take(1)).subscribe({
            next: (result) => expect(result).toEqual([])
        });

        service.autocomplete(null).pipe(take(1)).subscribe({
            next: (result) => expect(result).toEqual([])
        });
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});
