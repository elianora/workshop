import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * The core module configures parts of the application that are globally provided and configured at app startup.
 *
 * It does not provide any services of its own, and should only be imported in the AppModule.
 */
@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('An instance of CoreModule was already initialized!');
        }
    }
}
