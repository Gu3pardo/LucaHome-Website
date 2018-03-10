import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Security } from './security';
import { SecurityConverter } from './security-converter.c';
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class SecurityService implements OnInit, OnDestroy {

  private security$ = new BehaviorSubject<Security>(null);

  constructor(
    private readonly apiService: ApiService,
    private readonly toastService: ToastService) {
    this.apiService.securityData.subscribe(data => {
      if (data) {
        let conversionResult;
        try {
          conversionResult = SecurityConverter.ConvertJson(JSON.parse(data));
        } catch (error) {
          this.toastService.DisplayError(error.toString());
        }
        if (conversionResult) {
          this.security$.next(conversionResult);
        }
      }
    });
  }

  ngOnInit(): void {
    this.LoadSecurity();
  }

  ngOnDestroy(): void {
    this.apiService.securityData.unsubscribe();
  }

  get security() { return this.security$; }

  public LoadSecurity(): void {
    this.apiService.LoadSecurityData();
  }

  public SetCameraState(state: boolean): void {
    this.apiService.SetCameraState(`SECURITY::${state ? "START" : "STOP"}::MOTION`);
  }
}
