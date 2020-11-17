import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { LanguageService } from '../services/language.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public submitAttempt: boolean = false;
  public error: any;

  constructor(
    private modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private languageService: LanguageService
  ) {
    this.loginForm = formBuilder.group({
      email: ["", Validators.compose([Validators.email, Validators.required])],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  get language() {
    return this.languageService.language;
  }

  login() {
    this.submitAttempt = true;

    if (!this.loginForm.valid) {
      //error
      return;
    } else {
      this.auth
        .signInWithEmailAndPassword(
          this.loginForm.controls.email.value,
          this.loginForm.controls.password.value
        )
        .then((user) => {
          this.error = null;
          this.dismiss();
        })
        .catch((err) => {
          this.error = (this.language == 'de' ? 'Anmeldedaten sind falsch.' : 'I dati di accesso non sono corretti.');
        });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
