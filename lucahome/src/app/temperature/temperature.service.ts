import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Temperature } from './temperature';
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class TemperatureService {

  public temperature = new BehaviorSubject<Temperature>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) { }

  public GetTemperature(): void {
    // TODO add command
    let response = this.apiService.SendCommand("GetTemperature");
  }

}
