import { Component, OnInit, OnDestroy } from '@angular/core';
import { FooterLink } from "../interfaces/footer-link";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'lucahome-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  footerLinks: FooterLink[] = [{
    name: "GuepardoApps",
    url: "https://guepardoapps.github.io"
  }, {
    name: "GitHub",
    url: "https://www.github.com/guepardoapps"
  }];

  version: string = environment.version;
  copyright: string = environment.copyright;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
