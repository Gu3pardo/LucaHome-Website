import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock } from "../../mock";
import { ApiService } from "../../shared/api/api.service";
import { UserProviderService } from "../services/user-provider.service";

import { UserDialogComponent } from './user-dialog.component';

describe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let fixture: ComponentFixture<UserDialogComponent>;

  let apiServiceMock = jasmine.createSpyObj<ApiService>("ApiService", Mock.apiServiceMock);
  let userProviderServiceMock = jasmine.createSpyObj<UserProviderService>("UserProviderService", Mock.userProviderServiceMock);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDialogComponent
      ],
      providers: [
        { provide: ApiService, useValue: apiServiceMock },
        { provide: UserProviderService, useValue: userProviderServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login should call userProviderService.SetUser and apiService.AuthentificateUser', () => {
    component.login();

    expect(userProviderServiceMock.SetUser).toHaveBeenCalled();
    expect(apiServiceMock.AuthentificateUser).toHaveBeenCalled();
  });
});
