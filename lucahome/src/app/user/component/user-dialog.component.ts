import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lucahome-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  username: string;
  passphrase: string;

  constructor() { }

  ngOnInit() {
  }

  login(): void {
    console.log(`Login with username ${this.username} and passphrase ${this.passphrase}`)
  }
}

// https://material.angular.io/components/dialog
