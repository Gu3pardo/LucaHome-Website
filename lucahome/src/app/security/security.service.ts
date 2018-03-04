import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Security } from './security';
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class SecurityService {

  public security = new BehaviorSubject<Security>(null);
  
  constructor(
    private apiService: ApiService,
    private toastService: ToastService) { }

  public GetSecurity(): void {
    // TODO add command
    let response = this.apiService.SendCommand("GetSecurity");
  }

  public SetCameraState(state: boolean): void {
    // TODO add command
    let response = this.apiService.SendCommand(`SetCameraState: ${state}`);
  }

}
