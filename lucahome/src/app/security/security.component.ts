import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  link: string = "http://192.168.178.25:8081";
  circleColor: string = "red";
  cameraState: string = "inactive";
  buttonText: string = "Activate camera";

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public toggleCameraState(): void {
    console.log("toggleCameraState");
  }
}
