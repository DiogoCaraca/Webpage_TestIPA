import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

interface Dish {
  name: string;
  filename: string;
  ingredientsDe: string;
  ingredientsIt: string;
  orders: number;
}

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  constructor(private db: AngularFireDatabase) { }

}
