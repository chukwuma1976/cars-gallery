import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarStatisticsComponent } from './car-statistics/car-statistics.component';

export const routes: Routes = [
    {path: '', redirectTo: 'cars-home-page', pathMatch: 'full'},
    {path: 'cars-home-page', component: HomePageComponent},
    {path: 'car-gallery', component: GalleryComponent},
    {path: 'car-statistics', component: CarStatisticsComponent}
];
