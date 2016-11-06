import { Component } from '@angular/core';

import { DiscogService } from './services/discog.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [DiscogService]
})

export class AppComponent { }
