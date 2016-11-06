import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routing } from './app.routing';
 
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { ReleaseComponent }  from './components/release/release.component';
import { AboutComponent }  from './components/about/about.component';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             routing ],
  declarations: [ AppComponent, 
                  NavbarComponent,
                  SearchComponent,
                  ArtistComponent,
                  ReleaseComponent,
                  AboutComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
