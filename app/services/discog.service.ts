import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DiscogService {
    private searchUrl: string;
    private discogBaseUrl: string;
    private token: string;

    // Discog App Token
    private appKey: string = 'nzLSqFwdrCpQGAAcijAe';
    private appSecret: string ='OsCSQLRjyevSGQimoPnAknbFFjfMakdv';

    constructor(private _http:Http){ 
        this.discogBaseUrl = 'https://api.discogs.com';
        this.token = 'key='+this.appKey+'&secret='+this.appSecret;
    }
    
    onSearchApi(str: string, type="artist") {
        // console.log('api search: ' + str);
        this.searchUrl = this.discogBaseUrl+ "/database/search?q=" +str+ "&type=" +type+ "&" +this.token;
        return this._http.get(this.searchUrl).
                    map(res => res.json());
    }

    getArtist(id: number) {
        this.searchUrl = this.discogBaseUrl+ "/artists/" +id+ "?" +this.token;
        return this._http.get(this.searchUrl).
                    map(res => res.json());
    }

    getReleases(id: number, sort="format") {
        this.searchUrl = this.discogBaseUrl+ "/artists/" +id+ "/releases?sort=" +sort+ "&" +this.token;
        return this._http.get(this.searchUrl).
                    map(res => res.json());
    }

    getRelease(id: number) {
        this.searchUrl = this.discogBaseUrl+ "/releases/" +id+ "?"+this.token;
        return this._http.get(this.searchUrl).
                    map(res => res.json());
    }

}
