import { Routes } from '@angular/router';
import { AuthPage } from './auth.page';
import { authGuard } from '../guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        canActivateChild: [authGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
            },
            {
                path: 'resetpass',
                loadComponent: () => import('./resetpass/resetpass.page').then(m => m.ResetpassPage),
            }
        ]
    },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'resetpass',
    loadComponent: () => import('./resetpass/resetpass.page').then( m => m.ResetpassPage)
  }

];