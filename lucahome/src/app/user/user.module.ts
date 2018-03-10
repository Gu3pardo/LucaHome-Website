import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from "./component/user.component";
import { UserDialogComponent } from "./component/user-dialog.component";
import { UserService } from "./services/user.service";
import { UserProviderService } from "./services/user-provider.service";

@NgModule({
  declarations: [
    UserComponent,
    UserDialogComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    UserProviderService
  ],
  exports: [
    UserComponent,
    UserDialogComponent
  ]
})
export class UserModule { }
