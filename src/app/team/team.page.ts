import { Component, OnInit } from "@angular/core";
import { LanguageService } from '../services/language.service';

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
})
export class TeamPage implements OnInit {
  slideOpts = {
    loop: true,
    slidesPerView: 3.5,
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };

  team = [
    {
      name: "Giada Caretti",
      role_de: "Kellnerin",
      role_it: "Cameriera",
      image: "giada_caretti.jpg",
    },
    {
      name: "Mario Gambino",
      role_de: "Geschäftsführer",
      role_it: "Direttore generale",
      image: "mario_gambino.jpg",
    },
    {
      name: "Luigi Costa",
      role_de: "Kellner",
      role_it: "Cameriere",
      image: "luigi_costa.jpg",
    },
    {
      name: "Aurora Orecchioni",
      role_de: "Köchin",
      role_it: "Cucinare",
      image: "aurora_orecchioni.jpg",
    },
    {
      name: "Luca Monzione",
      role_de: "Koch",
      role_it: "Cucinare",
      image: "luca_monzione.jpg",
    },
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {}

  get language() {
    return this.languageService.language;
  }
}
