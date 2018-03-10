import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ILucaDialogService } from "./dialog.service.i";

@Injectable()
export class DialogService implements ILucaDialogService {

  private dialogReference: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  openDialog(component: any): void {
    if (component) {
      this.dialogReference = this.dialog.open(component, {
        height: "35%",
        width: "40%",
        closeOnNavigation: false,
        disableClose: true
      });
    }
  }

  closeDialog(): void {
    if (this.dialogReference) {
      this.dialogReference.close();
    }
  }
}
