import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs/add/observable/of";

import { Mock } from "../mock";
import { DialogService } from "../shared/dialog.service";
import { UserProviderService } from "./user-provider.service";

import { User } from './user';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let dialogServiceMock = jasmine.createSpyObj<DialogService>("DialogService", Mock.dialogServiceMock);

  let userResult: User = {
    name: "Username",
    passphrase: "Userpassphrase",
    isValid: true
  };
  let userProviderServiceMock = {
    user: new BehaviorSubject(userResult),
    SetUser: (user: User) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      providers: [
        { provide: DialogService, useValue: dialogServiceMock },
        { provide: UserProviderService, useValue: userProviderServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openDialog should call dialogService.openDialog', () => {
    component.openDialog();

    expect(dialogServiceMock.openDialog).toHaveBeenCalled();
  });
});
