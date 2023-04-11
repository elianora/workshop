import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    FaIconLibrary,
    FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CardAutocompleterComponent } from './components/card-autocompleter/card-autocompleter.component';

/**
 * The shared module defines common components that can be re-used across any feature of the application.
 *
 * This module should be imported into each feature module in order to provide common functionality and components.
 */
@NgModule({
    declarations: [CardAutocompleterComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        FontAwesomeModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule,
    ],
})
export class SharedModule {
    constructor(library: FaIconLibrary) {
        library.addIcons();
    }
}
