import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LanguageService } from '../services/language.service';

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.page.html",
  styleUrls: ["./reservation.page.scss"],
})
export class ReservationPage implements OnInit {
  public reservationForm: FormGroup;
  public submitAttempt: boolean = false;

  constructor(public formBuilder: FormBuilder, private db: AngularFireDatabase, private languageService: LanguageService) {
    this.reservationForm = formBuilder.group({
      firstname: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern(
            '[a-zA-Z ]*'
          ),
          Validators.required,
        ]),
      ],
      lastname: [
        "",
        Validators.compose([
          Validators.maxLength(30),
          Validators.pattern(
            '[a-zA-Z ]*'
          ),
          Validators.required,
        ]),
      ],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      count: [
        "1",
        Validators.compose([
          Validators.required
        ]),
      ],
      datetime: [
        "",
        Validators.compose([
          Validators.required
        ]),
      ],
      
    });
  }

  ngOnInit() {}

  get language() {
    return this.languageService.language;
  }

  save() {
    this.submitAttempt = true;

    if (!this.reservationForm.valid) {
      //error
      return;
    } else {
      this.reservationForm.controls.datetime.setValue(this.reservationForm.controls.datetime.value.slice(0, -13));
      this.reservationForm.controls.datetime.setValue(this.reservationForm.controls.datetime.value.replace("T", " "));
      this.db.list("/Reservationen/").push(this.reservationForm.value);
      
    }
  }
}
