import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { SandboxesDefined } from './sandboxes';

platformBrowserDynamic()
    .bootstrapModule(
        PlaygroundModule.configure({
            selector: 'ws-root',
            overlay: false,
            modules: [],
            sandboxesDefined: SandboxesDefined,
        })
    )
    .catch((err) => console.error(err));
