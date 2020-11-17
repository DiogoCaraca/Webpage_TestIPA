import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { LoginPage } from "../login/login.page";
import { LanguageService } from '../services/language.service';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  public admin: boolean;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private auth: AngularFireAuth,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.admin = true;
      } else {
        this.admin = false;
      }
    });
    this.languageService.change("de");
  }

  get language() {
    return this.languageService.language;
  }

  logout() {
    this.auth.signOut().finally(() => {
      this.admin = false;
      this.router.navigate(["/pizzeria"]);
    });
  }

  languageChange($event) {
    this.languageService.change($event.target.value); 
  }

  async loginModal() {
    const modal = await this.modalController.create({
      component: LoginPage,
      backdropDismiss: true,
      keyboardClose: true,
    });
    return await modal.present();
  }
}
