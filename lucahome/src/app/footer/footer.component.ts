import { Component, OnInit } from '@angular/core';
import { FooterLink } from "./footer-link";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinks: FooterLink[] = [{
    name: "GuepardoApps",
    url: "https://guepardoapps.github.io"
  }, {
    name: "GitHub",
    url: "https://www.github.com/guepardoapps"
  }];

  version: string = "2018.03.03.01";
  copyright: string = "2018";

  constructor() { }

  ngOnInit() {
  }

}
