import { Component, OnInit } from '@angular/core';
import { DialogService } from "../../shared/dialog/dialog.service";
import { User } from "../interfaces/user";
import { UserProviderService } from "../services/user-provider.service";
import { UserDialogComponent } from "./user-dialog.component";

@Component({
  selector: 'lucahome-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = {
    name: "Jonas Schubert",
    passphrase: "Secret",
    isValid: true
  };

  constructor(
    private readonly dialogService: DialogService,
    private readonly userProviderService: UserProviderService) {
  }

  ngOnInit() {
    this.userProviderService.user.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });

    this.dialogService.openDialog(UserDialogComponent);
  }

  public openDialog(): void {
    this.dialogService.openDialog(UserDialogComponent);
  }
}
