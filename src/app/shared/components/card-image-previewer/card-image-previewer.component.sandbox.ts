import { sandboxOf } from 'angular-playground';
import { CardImagePreviewerComponent } from './card-image-previewer.component';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default sandboxOf(CardImagePreviewerComponent, {
    imports: [
        CoreModule,
        BrowserAnimationsModule,
    ],
}).add('default', {
    template: `<ws-card-image-previewer cardName="Austere Command"></ws-card-image-previewer>`,
});
