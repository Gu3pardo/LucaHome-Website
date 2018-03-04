import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock } from "../mock";

import { SecurityService } from "./security.service";
import { SecurityComponent } from './security.component';

describe('SecurityComponent', () => {
  let component: SecurityComponent;
  let fixture: ComponentFixture<SecurityComponent>;

  let securityServiceMock = jasmine.createSpyObj<SecurityService>("SecurityService", Mock.securityServiceMock);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SecurityComponent
      ],
      providers: [
        { provide: SecurityService, useValue: securityServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
