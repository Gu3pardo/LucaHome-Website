import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string = "";
  copyright: string = "";

  constructor() { }

  ngOnInit() {
    this.version = "2018.03.02.01";
    this.copyright = "2018";
  }

}
