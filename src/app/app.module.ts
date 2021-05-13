import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCardComponent,
    HeaderComponent,
    PopularPageComponent,
    FavoritesPageComponent,
    DiscoverPageComponent,
    TopRatedPageComponent,
    MovieGridComponent,
    MovieDetailComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
