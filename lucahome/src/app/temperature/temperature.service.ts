import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Temperature } from './temperature';
import { TemperatureConverter } from "./temperature-converter.c";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class TemperatureService {

  public temperature$ = new BehaviorSubject<Temperature>(null);

  constructor(
    private apiService: ApiService,
    private toastService: ToastService) {
    this.LoadTemperature();
  }

  get temperature() { return this.temperature$; }

  public LoadTemperature(): void {
    let jsonResponse = this.apiService.LoadTemperatureData();
    if (jsonResponse) {
      let conversionResult;
      try {
        conversionResult = TemperatureConverter.ConvertJson(jsonResponse.getValue());
      } catch (error) {
        console.log(error);
      }
      if (conversionResult) {
        this.temperature$.next(conversionResult);
      }
    }
  }
}
