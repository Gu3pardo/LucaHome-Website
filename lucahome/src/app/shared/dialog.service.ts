import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ILucaDialogService } from "./dialog.service.i";

@Injectable()
export class DialogService implements ILucaDialogService {

  animal: string;
  name: string;

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    /*let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });*/
  }

  closeDialog(): void {

  }
}
/*
@Component({
  selector: 'dialog-overview-example-dialog',
  template: '<ol><li><button (click)="openDialog()">Pick one</button></li><li *ngIf="animal">You chose: <i>{{animal}}</i></li></ol>',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/
