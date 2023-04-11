import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAutocompleterComponent } from './card-autocompleter.component';
import { CoreModule } from '@core/core.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ScryfallCatalog } from '@core/models/scryfall-catalog.model';
import { skip, take, takeLast } from 'rxjs/operators';

describe('CardAutocompleterComponent', () => {
    let component: CardAutocompleterComponent;
    let fixture: ComponentFixture<CardAutocompleterComponent>;
    let httpTestingController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardAutocompleterComponent],
            imports: [
                CoreModule,
                HttpClientTestingModule,
                MatAutocompleteModule,
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
            ],
        }).compileComponents();

        httpTestingController = TestBed.inject(HttpTestingController);
        fixture = TestBed.createComponent(CardAutocompleterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should initialize and not call to the API', () => {
        expect(component).toBeTruthy();

        component.options$.pipe(take(1)).subscribe({
            next: (values) => expect(values).toEqual([])
        });
    });

    it('should call to the API when the input changes', () => {
        const cardNames = ['Thalia, Guardian of Thraben', 'Thallid'];

        component.cardNameControl.setValue('thal');
        const req = httpTestingController.expectOne(
            'https://api.scryfall.com/cards/autocomplete?q=thal'
        );

        req.flush({
            uri: 'SCRYFALL_URI_HERE',
            total_values: 2,
            data: cardNames
        } as ScryfallCatalog);

        component.options$.pipe(skip(1)).subscribe({
            next: (values) => expect(values).toEqual(cardNames)
        });
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});
