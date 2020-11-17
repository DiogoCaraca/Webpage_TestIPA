import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

import { Chart } from "chart.js";
import { Subscription } from "rxjs";
import { map, take } from "rxjs/operators";
import { LanguageService } from '../services/language.service';
import { PrintService } from "../services/print.service";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.page.html",
  styleUrls: ["./statistics.page.scss"],
})
export class StatisticsPage implements OnInit {
  @ViewChild("barCanvas") private barCanvas: ElementRef;

  public reservations = [];
  public dishes;
  barChart: any;
  week = [];

  constructor(private db: AngularFireDatabase, private printService: PrintService, private languageService: LanguageService) {}

  ngOnInit() {
    this.db
      .list<Reservation[]>("/Reservationen/")
      .snapshotChanges()
      .pipe(
        map((reservations) =>
          reservations.map((reservation) => ({
            id: reservation.payload.key,
            ...reservation.payload.val(),
          }))
        ),
        take(1)
      )
      .subscribe((reservations) => {
        this.reservations = reservations;
        this.barChartMethod();
      });

    this.dishes = this.db
      .list("/Speisen/", (ref) => ref.orderByChild("bestellungen"))
      .valueChanges();
  }
  
  get language() {
    return this.languageService.language;
  }

  countWeeklyOccupany() {
    let curr = new Date();
    let count = 0;

    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);

      this.reservations.forEach((reservation, index) => {
        if (reservation.datetime.slice(0, -6) == day) {
          count++;
        }
      });
      this.week.push(count);
      count = 0;
    }
  }

  barChartMethod() {
    this.countWeeklyOccupany();
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: [
          'Montag / Lunedì',
          'Dienstag / Martedì',
          'Mittwoch / Mercoledì',
          'Donnerstag / Giovedì',
          'Freitag / Venerdì',
          'Samstag / Sabato',
          'Sonntag / Domenica'
        ],
        datasets: [
          {
            label: 'Anzahl Reservationen / Numero di prenotazioni',
            data: [
              this.week[0],
              this.week[1],
              this.week[2],
              this.week[3],
              this.week[4],
              this.week[5],
              this.week[6],
            ],
            backgroundColor: [
              "rgba(0, 140, 69, 1)",
              "rgba(0, 140, 69, 1)",
              "rgba(0, 140, 69, 1)",
              "rgba(0, 140, 69, 1)",
              "rgba(0, 140, 69, 1)",
              "rgba(0, 140, 69, 1)",
              "rgba(0, 140, 69, 1)",
            ],
            borderColor: [
              "rgba(205, 33, 42, 1)",
              "rgba(205, 33, 42, 1)",
              "rgba(205, 33, 42, 1)",
              "rgba(205, 33, 42, 1)",
              "rgba(205, 33, 42, 1)",
              "rgba(205, 33, 42, 1)",
              "rgba(205, 33, 42, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  print(menulist) {
    this.printService.print(menulist);
  }
}

class Reservation {
  constructor(
    public id: string,
    public count: number,
    public datetime: string,
    public email: string,
    public firstname: string,
    public lastname: string
  ) {}
}
