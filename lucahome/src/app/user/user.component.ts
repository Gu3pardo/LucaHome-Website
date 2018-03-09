import { Component, OnInit } from '@angular/core';
import { DialogService } from "../shared/dialog.service";
import { User } from "./user";
import { UserProviderService } from "./user-provider.service";

@Component({
  selector: 'app-user',
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

    this.dialogService.openDialog();
  }
  
  public openDialog(): void {
    this.dialogService.openDialog();
  }
}
