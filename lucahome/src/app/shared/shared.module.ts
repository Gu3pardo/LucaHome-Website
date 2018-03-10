import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from "./api/api.service";
import { DialogService } from "./dialog/dialog.service";
import { ToastService } from "./toast/toast.service";

@NgModule({
  declarations: [
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
