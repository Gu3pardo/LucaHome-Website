import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from "./component/shopping.component";
import { ShoppingService } from "./services/shopping.service";

@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ShoppingService
  ],
  exports: [
    ShoppingComponent
  ]
})
export class ShoppingModule { }
