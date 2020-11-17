import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  public language;

  public languageChange: Subject<string> = new Subject<string>();

  constructor() {
    this.languageChange.subscribe((value) => {
      this.language = value;
    });
  }

  change(language) {
    this.languageChange.next(language);
  }
}
