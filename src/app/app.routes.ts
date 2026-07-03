import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent) },
  { path: 'acerca-de', loadComponent: () => import('./pages/acerca-de/acerca-de.component').then(m => m.AcercaDeComponent) },
  { path: 'sillas-de-ruedas', loadComponent: () => import('./pages/sillas-de-ruedas/sillas-de-ruedas.component').then(m => m.SillasDeRuedasComponent) },
  { path: 'contactenos', loadComponent: () => import('./pages/contactenos/contactenos.component').then(m => m.ContactenosComponent) },
  { path: '**', redirectTo: '' }
];
