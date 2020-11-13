import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'dishes',
        children: [
          {
            path: '',
            loadChildren: () => import('../dishes/dishes.module').then( m => m.DishesPageModule)
          }
        ]
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadChildren: () => import('../team/team.module').then( m => m.TeamPageModule)
          }
        ]
      },
      {
        path: 'reservation',
        children: [
          {
            path: '',
            loadChildren: () => import('../reservation/reservation.module').then( m => m.ReservationPageModule)
          }
        ]
      },
      {
        path: 'location',
        children: [
          {
            path: '',
            loadChildren: () => import('../location/location.module').then( m => m.LocationPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/pizzeria/home',
        pathMatch: 'full'
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
