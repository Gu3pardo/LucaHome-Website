import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Temperature } from "./temperature";
import { TemperatureService } from "./temperature.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  link: string = environment.temperatureUrl;
  temperature: Temperature;
  circleColor: string = "white";

  constructor(
    private domSanitizer: DomSanitizer,
    private temperatureService: TemperatureService) { }

  ngOnInit() {
    this.temperatureService.temperature.subscribe(temperature => {
      if (temperature) {
        this.temperature = temperature;
        this.setCircleColor();
      }
    });

    this.temperatureService.LoadTemperature();
  }
  
  private setCircleColor(): void {
    if (this.temperature.value < 15) {
      this.circleColor = "white";
    } else if (this.temperature.value >= 15 && this.temperature.value < 17) {
      this.circleColor = "blue";
    } else if (this.temperature.value >= 17 && this.temperature.value < 18.5) {
      this.circleColor = "yellow";
    } else if (this.temperature.value >= 18.5 && this.temperature.value < 20.5) {
      this.circleColor = "green";
    } else if (this.temperature.value >= 20.5 && this.temperature.value < 22) {
      this.circleColor = "yellow";
    } else if (this.temperature.value >= 22 && this.temperature.value < 25) {
      this.circleColor = "red";
    } else {
      this.circleColor = "white";
    }
  }
}
