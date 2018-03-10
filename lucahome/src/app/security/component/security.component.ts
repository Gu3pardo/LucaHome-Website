import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Security } from "../interfaces/security";
import { SecurityService } from "../services/security.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'lucahome-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  link: string = environment.securityUrl;
  security: Security = { taskActive: false, active: false };

  constructor(
    private readonly domSanitizer: DomSanitizer,
    private readonly securityService: SecurityService) {
  }

  ngOnInit() {
    this.securityService.security.subscribe(security => {
      if (security) {
        this.security = security;
      }
    });

    this.securityService.LoadSecurity();
  }

  public toggleCameraState(): void {
    this.securityService.SetCameraState(!this.security.active);
  }
}
