import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit, OnDestroy {

  link: string = "http://192.168.178.25/cgi-bin/webgui.py";
  circleColor: string = "white";
  temperature: number = 11.3;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
