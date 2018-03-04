import { TestBed, async } from '@angular/core/testing';

import { Mock } from "./mock";

import { AppComponent } from './app.component';
import { FooterComponent } from "./footer/footer.component";
import { MapComponent } from "./map/map.component";
import { MealComponent } from "./meal/meal.component";
import { SecurityComponent } from "./security/security.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { TemperatureComponent } from "./temperature/temperature.component";
import { UserComponent } from "./user/user.component";

import { SecurityService } from "./security/security.service";

describe('AppComponent', () => {
  let securityServiceMock = jasmine.createSpyObj<SecurityService>("SecurityService", Mock.securityServiceMock);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        MapComponent,
        MealComponent,
        SecurityComponent,
        ShoppingComponent,
        TemperatureComponent,
        UserComponent
      ],
      providers: [
        { provide: SecurityService, useValue: securityServiceMock }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
