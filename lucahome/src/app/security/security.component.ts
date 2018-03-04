import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityService } from "./security.service";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit, OnDestroy {

  link: string = "http://192.168.178.25:8081";
  circleColor: string = "red";
  cameraState: string = "inactive";
  buttonText: string = "Activate camera";

  constructor(
    private domSanitizer: DomSanitizer,
    private securityService: SecurityService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public toggleCameraState(): void {
    console.log("toggleCameraState");
  }
}
