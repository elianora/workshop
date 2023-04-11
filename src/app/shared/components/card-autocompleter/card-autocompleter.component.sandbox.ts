import { sandboxOf } from 'angular-playground';
import { CardAutocompleterComponent } from './card-autocompleter.component';
import { CoreModule } from '@core/core.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default sandboxOf(CardAutocompleterComponent, {
    imports: [
        CoreModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
}).add('default', {
    template: `<ws-card-autocompleter></ws-card-autocompleter>`,
});
