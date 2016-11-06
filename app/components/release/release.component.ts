import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscogService } from '../../services/discog.service';
import { Release } from '../../Release';


@Component({
    selector: 'release',
    moduleId: module.id,
    templateUrl: 'release.component.html'
})

export class ReleaseComponent implements OnInit {
    id: number;
    release: Release[];

    constructor(
        private _discogService: DiscogService,
        private _router:ActivatedRoute) {

    }

    ngOnInit() {
        this._router.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._discogService.getRelease(id)
                    .subscribe(release => {
                        console.log(release);
                        this.release = release;
                    })
            })
    }
}