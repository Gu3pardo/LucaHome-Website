import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock } from "../mock";
import { DialogService } from "../shared/dialog.service";

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let dialogServiceMock = jasmine.createSpyObj<DialogService>("DialogService", Mock.dialogServiceMock);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      providers: [
        { provide: DialogService, useValue: dialogServiceMock }
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
});
