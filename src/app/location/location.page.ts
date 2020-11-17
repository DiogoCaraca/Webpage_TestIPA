import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  get language() {
    return this.languageService.language;
  }

}
