import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DishesService } from '../services/dishes.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {

  dishes: Observable<any[]>;

  slideOpts = {
    loop: true,
    slidesPerView: 3.5,
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor(private dishesService: DishesService, private db: AngularFireDatabase, private languageService: LanguageService) { }

  get language() {
    return this.languageService.language;
  }

  ngOnInit() {
    this.dishes = this.db.list("/Speisen/").valueChanges();
  }

}
