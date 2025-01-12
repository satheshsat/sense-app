import { Routes } from '@angular/router';
import { HomePage } from './home.page';
import { homeGuard } from '../guard/home.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        canActivateChild: [homeGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'partymaster'
            },
            {
                path: 'partymaster',
                loadComponent: () => import('./partymaster/partymaster.page').then(m => m.PartymasterPage),
            },
            {
                path: 'users',
                loadComponent: () => import('./users/users.page').then(m => m.UsersPage),
            },
            {
                path: 'serviceentry',
                loadComponent: () => import('./serviceentry/serviceentry.page').then(m => m.ServiceentryPage),
            },
            {
              path: 'products',
              loadComponent: () => import('./products/products.page').then(m => m.ProductsPage),
          },
          {
              path: 'jobcard',
              loadComponent: () => import('./jobcard/jobcard.page').then(m => m.JobcardPage),
          },
          {
              path: 'delivery',
              loadComponent: () => import('./delivery/delivery.page').then(m => m.DeliveryPage),
          },
          {
            path: 'adjustment',
            loadComponent: () => import('./adjustment/adjustment.page').then(m => m.AdjustmentPage),
          },
          {
            path: 'purchase',
            loadComponent: () => import('./purchase/purchase.page').then(m => m.PurchasePage),
          }
        ]
    },
  {
    path: 'partymaster',
    loadComponent: () => import('./partymaster/partymaster.page').then( m => m.PartymasterPage)
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.page').then( m => m.UsersPage)
  },
  {
    path: 'serviceentry',
    loadComponent: () => import('./serviceentry/serviceentry.page').then( m => m.ServiceentryPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'jobcard',
    loadComponent: () => import('./jobcard/jobcard.page').then( m => m.JobcardPage)
  },
  {
    path: 'delivery',
    loadComponent: () => import('./delivery/delivery.page').then( m => m.DeliveryPage)
  },
  {
    path: 'adjustment',
    loadComponent: () => import('./adjustment/adjustment.page').then( m => m.AdjustmentPage)
  },
  {
    path: 'purchase',
    loadComponent: () => import('./purchase/purchase.page').then( m => m.PurchasePage)
  }

];