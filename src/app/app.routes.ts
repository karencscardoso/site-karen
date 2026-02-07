import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Filmografy } from './pages/filmografy/filmografy';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'filmografy', component: Filmografy },
    
];
