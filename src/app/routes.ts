import { Routes } from '@angular/router';
import { PostService } from './service/posts.service';

export const HomeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
  },
    // children:[]
      {
        path: 'home',
        providers:[PostService],
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'domains',
        loadComponent: () => import('./pages/domains/domains.component').then(m => m.DomainsComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
      }
]