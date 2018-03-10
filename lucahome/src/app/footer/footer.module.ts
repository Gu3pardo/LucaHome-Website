import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./component/footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
