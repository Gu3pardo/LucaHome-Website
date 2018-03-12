import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http"
import { MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/component/footer.component';
import { MapComponent } from './map/component/map.component';
import { MealComponent } from './meal/component/meal.component';
import { SecurityComponent } from './security/component/security.component';
import { ShoppingComponent } from './shopping/component/shopping.component';
import { TemperatureComponent } from './temperature/component/temperature.component';
import { UserComponent } from './user/component/user.component';
import { UserDialogComponent } from './user/component/user-dialog.component';

import { ApiService } from "./shared/api/api.service";
import { DialogService } from "./shared/dialog/dialog.service";
import { EnumToArrayPipe } from "./shared/pipes/enum-to-array-pipe.p";
import { ToastService } from "./shared/toast/toast.service";

import { MealService } from "./meal/services/meal.service";
import { SecurityService } from "./security/services/security.service";
import { ShoppingService } from "./shopping/services/shopping.service";
import { TemperatureService } from "./temperature/services/temperature.service";
import { UserService } from "./user/services/user.service";
import { UserProviderService } from "./user/services/user-provider.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MapComponent,
    SecurityComponent,
    TemperatureComponent,
    MealComponent,
    ShoppingComponent,
    UserComponent,
    UserDialogComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule
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
  bootstrap: [AppComponent],
  entryComponents: [UserDialogComponent]
})
export class AppModule { }
