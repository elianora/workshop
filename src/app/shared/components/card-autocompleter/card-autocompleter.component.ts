import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ScryfallService } from '@core/services/scryfall.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

@UntilDestroy()
@Component({
    selector: 'ws-card-autocompleter',
    templateUrl: './card-autocompleter.component.html',
    styleUrls: ['./card-autocompleter.component.scss'],
})
export class CardAutocompleterComponent {
    cardNameControl = new FormControl('');
    options$: Observable<string[]>;

    constructor(private scryfall: ScryfallService) {
        this.options$ = this.cardNameControl.valueChanges.pipe(
            startWith(''),
            switchMap(value => this.scryfall.autocomplete(value)),
            untilDestroyed(this)
        );
    }
}
