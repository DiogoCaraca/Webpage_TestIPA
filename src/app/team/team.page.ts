import { Component, OnInit } from "@angular/core";

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
    autoplay: true
  };

  team = [
    { name: "Giada Caretti", role_de: "Kellnerin", image: "giada_caretti.jpg" },
    {
      name: "Mario Gambino",
      role_de: "Geschäftsführer",
      image: "mario_gambino.jpg",
    },
    { name: "Luigi Costa", role_de: "Kellner", image: "luigi_costa.jpg" },
    {
      name: "Aurora Orecchioni",
      role_de: "Köchin",
      image: "aurora_orecchioni.jpg",
    },
    { name: "Luca Monzione", role_de: "Koch", image: "luca_monzione.jpg" },
  ];

  constructor() {}

  ngOnInit() {}
}
