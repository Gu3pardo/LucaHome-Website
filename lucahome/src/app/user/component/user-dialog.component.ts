import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../shared/api/api.service";
import { UserProviderService } from "../services/user-provider.service";

@Component({
  selector: 'lucahome-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  username: string;
  passphrase: string;

  constructor(
    private readonly apiService: ApiService,
    private readonly userProviderService: UserProviderService) {
  }

  ngOnInit() {
  }

  login(): void {
    this.userProviderService.SetUser({ name: this.username, passphrase: this.passphrase, isValid: false });
    this.apiService.AuthentificateUser();
  }
}

// https://material.angular.io/components/dialog
