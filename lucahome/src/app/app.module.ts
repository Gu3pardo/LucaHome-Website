import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { SecurityComponent } from './security/security.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { MealComponent } from './meal/meal.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { UserComponent } from './user/user.component';

// import { DialogOverviewExampleDialog } from "./shared/dialog.service";

import { ApiService } from "./shared/api.service";
import { DialogService } from "./shared/dialog.service";
import { ToastService } from "./shared/toast.service";

import { MealService } from "./meal/meal.service";
import { SecurityService } from "./security/security.service";
import { ShoppingService } from "./shopping/shopping.service";
import { TemperatureService } from "./temperature/temperature.service";
import { UserService } from "./user/user.service";
import { UserProviderService } from "./user/user-provider.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MapComponent,
    SecurityComponent,
    TemperatureComponent,
    MealComponent,
    ShoppingComponent,
    UserComponent/*,
    DialogOverviewExampleDialog*/
  ],
  //entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    DialogService,
    ToastService,
    MealService,
    SecurityService,
    ShoppingService,
    TemperatureService,
    UserService,
    UserProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
