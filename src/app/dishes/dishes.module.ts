import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishesPageRoutingModule } from './dishes-routing.module';

import { DishesPage } from './dishes.page';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishesPageRoutingModule
  ],
  declarations: [DishesPage, FooterComponent]
})
export class DishesPageModule {}
