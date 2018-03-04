import { Component, OnInit, OnDestroy } from '@angular/core';

import { DialogService } from "../shared/dialog.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  user: any;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.user = {
      name: "Jonas Schubert"
    };
  }

  ngOnDestroy() {
  }

  public openDialog(): void {
    this.dialogService.openDialog();
  }
}
