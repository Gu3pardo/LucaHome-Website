import { Injectable } from "@angular/core";
import { ILucaToastService } from "./toast.service.i";

@Injectable()
export class ToastService implements ILucaToastService {

  constructor() { }

  DisplayError(text: string): void {
  }

  DisplaySuccess(text: string): void {
  }
}
