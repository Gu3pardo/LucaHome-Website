import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { SecurityComponent } from './security/security.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { MealComponent } from './meal/meal.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MapComponent,
    SecurityComponent,
    TemperatureComponent,
    MealComponent,
    ShoppingComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
