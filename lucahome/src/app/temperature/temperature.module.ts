import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureComponent } from "./component/temperature.component";
import { TemperatureService } from "./services/temperature.service";

@NgModule({
  declarations: [
    TemperatureComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TemperatureService
  ],
  exports: [
    TemperatureComponent
  ]
})
export class TemperatureModule { }
