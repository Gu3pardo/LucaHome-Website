import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from "../../../environments/environment";
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let environmentMock = {
    production: false,
    securityUrl: "securityUrl",
    temperatureUrl: "temperatureUrl",
    version: "2018.03.09",
    copyright: "2018"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      providers: [
        { provide: environment, useValue: environmentMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
