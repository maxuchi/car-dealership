import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Cars } from './pages/cars/cars';
import { CarDetails } from './pages/car-details/car-details';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'cars',
    component: Cars,
  },
  {
    path: 'cars/:id',
    component: CarDetails,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
];