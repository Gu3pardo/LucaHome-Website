import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Temperature } from './temperature';
import { TemperatureConverter } from "./temperature-converter.c";
import { ApiService } from "../shared/api.service";
import { ToastService } from "../shared/toast.service";

@Injectable()
export class TemperatureService implements OnInit, OnDestroy {

  private temperature$ = new BehaviorSubject<Temperature>(null);

  constructor(
    private readonly apiService: ApiService,
    private readonly toastService: ToastService) {
  }

  ngOnInit(): void {
    this.apiService.temperatureData.subscribe(data => {
      if (data) {
        let conversionResult;
        try {
          conversionResult = TemperatureConverter.ConvertJson(JSON.parse(data));
        } catch (error) {
          this.toastService.DisplayError(error.toString());
        }
        if (conversionResult) {
          this.temperature$.next(conversionResult);
        }
      }
    });

    this.LoadTemperature();
  }

  ngOnDestroy(): void {
    this.apiService.temperatureData.unsubscribe();
  }

  get temperature() { return this.temperature$; }

  public LoadTemperature(): void {
    this.apiService.LoadTemperatureData();
  }
}
