import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public modalController: ModalController) {

  }
  
  ngOnInit() {
  }

  async loginModal() {
    const modal = await this.modalController.create({
      component: LoginPage,
      backdropDismiss: true,
      keyboardClose: true
    });
    return await modal.present();
  }

}
