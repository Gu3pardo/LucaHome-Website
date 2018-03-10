import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from "./component/security.component";
import { SecurityService } from "./services/security.service";

@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SecurityService
  ],
  exports: [
    SecurityComponent
  ]
})
export class SecurityModule { }
