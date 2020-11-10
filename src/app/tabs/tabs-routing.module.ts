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
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'dishes',
        children: [
          {
            path: '',
            loadChildren: '../dishes/dishes.module#DishesPageModule'
          }
        ]
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadChildren: '../team/team.module#TeamPageModule'
          }
        ]
      },
      {
        path: 'reservation',
        children: [
          {
            path: '',
            loadChildren: '../reservation/reservation.module#ReservationPageModule'
          }
        ]
      },
      {
        path: 'location',
        children: [
          {
            path: '',
            loadChildren: '../location/location.module#LocationPageModule'
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
