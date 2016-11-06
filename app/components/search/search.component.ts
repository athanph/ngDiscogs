import { Component } from '@angular/core';
import { DiscogService } from '../../services/discog.service';
import { Artist } from '../../Artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [DiscogService]
})

export class SearchComponent { 
    searchText: string;
    searchRes: Artist[];

    constructor(private _discogService: DiscogService){ 
        this.searchText = "";
    }

    search(){
        console.log(this.searchText);
        // access api
        this._discogService.onSearchApi(this.searchText)
            .subscribe(res => {
                console.log(res.results);
                this.searchRes = res.results;
            });
    }
}