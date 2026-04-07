import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Filmografy } from './pages/filmografy/filmografy';
import { Ti } from './pages/ti/ti';

export const routes: Routes = [
    
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'filmografy',component: Filmografy, data: { toolbarTitle: 'Filmografy' } },
    { path: 'projects', component: Ti, data: { toolbarTitle: 'Projects' } },
    
];
