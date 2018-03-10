import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Mock } from "../../mock";
import { UserProviderService } from "../../user/services/user-provider.service";
import { DialogService } from "../dialog/dialog.service";
import { ToastService } from "../toast/toast.service";

import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpMock: HttpTestingController;
  let dialogServiceMock = jasmine.createSpyObj<DialogService>("DialogService", Mock.dialogServiceMock);
  let toastServiceMock = jasmine.createSpyObj<ToastService>("ToastService", Mock.toastServiceMock);

  let userProviderServiceMock = {
    user: new BehaviorSubject({ name: "Jonas Schubert" })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiService,
        { provide: UserProviderService, useValue: userProviderServiceMock },
        { provide: DialogService, useValue: dialogServiceMock },
        { provide: ToastService, useValue: toastServiceMock }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});

// Help:
// http://www.syntaxsuccess.com/viewarticle/mocking-http-request-with-httpclient-in-angular
