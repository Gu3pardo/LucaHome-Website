import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Security } from './security';
import { SecurityConverter } from './security-converter.c';
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class SecurityService {

  public security$ = new BehaviorSubject<Security>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) {
    this.LoadSecurity();
  }

  get security() { return this.security$; }

  public LoadSecurity(): void {
    let jsonResponse = this.apiService.LoadSecurityData();
    if (jsonResponse) {
      let conversionResult;
      try {
        conversionResult = SecurityConverter.ConvertJson(jsonResponse.getValue());
      } catch (error) {
        console.log(error);
      }
      if (conversionResult) {
        this.security$.next(conversionResult);
      }
    }
  }

  public SetCameraState(state: boolean): void {
    // TODO add command
    let response = this.apiService.SetCameraState(`SetCameraState: ${state}`);
  }

}
