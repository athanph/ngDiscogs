import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscogService } from '../../services/discog.service';
import { Artist } from '../../Artist';
import { Release } from '../../Release';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})

export class ArtistComponent implements OnInit {
    id: number;
    artist: Artist[];
    releases: Release[];
    pagination: any;

    constructor(
        private _discogService: DiscogService,
        private _router:ActivatedRoute) {

    }

    ngOnInit() {
        this._router.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._discogService.getArtist(id)
                    .subscribe(artist => {
                        console.log(artist);
                        this.artist = artist;
                    })

                this._discogService.getReleases(id)
                    .subscribe(releases => {
                        console.log(releases);
                        this.releases = releases.releases;
                        this.pagination = releases.pagination;
                    })
            })
    }
}