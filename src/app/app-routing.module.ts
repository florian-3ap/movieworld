import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { TopRatedPageComponent } from './pages/top-rated-page/top-rated-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'popular',
    component: PopularPageComponent
  },
  {
    path: 'top-rated',
    component: TopRatedPageComponent
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent
  },
  {
    path: 'discover',
    component: DiscoverPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
