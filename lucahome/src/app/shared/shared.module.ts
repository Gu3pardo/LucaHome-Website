import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from "./api/api.service";
import { DialogService } from "./dialog/dialog.service";
import { ToastService } from "./toast/toast.service";
import { EnumToArrayPipe } from "./pipes/enum-to-array-pipe.p";

@NgModule({
  declarations: [
    EnumToArrayPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    DialogService,
    ToastService
  ],
  exports: [
  ]
})
export class SharedModule { }
