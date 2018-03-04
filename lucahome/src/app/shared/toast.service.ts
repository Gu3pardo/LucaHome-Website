import { Injectable } from "@angular/core";
// import { IToastService } from "angular-material";
import { ILucaToastService } from "./toast.service.i";

@Injectable()
export class ToastService implements ILucaToastService {
  public toastPosition: string = "bottom right";

  public content: string;
  public static $inject = ["$mdToast"];

  // TODO: Injection not working!
  constructor(/*private $mdToast: IToastService*/) { }

  DisplayError(text: string): void {
    /*this.$mdToast.show({
      position: this.toastPosition,
      controller: () => {
        this.content = text;
      },
      controllerAs: "toast",
      template: '<md-toast>\{{toast.content}}\<md-button ng-click="toast.cancel()" class="md-warn">\<md-icon md-font-set="material-icons"> clear </md-icon>\</md-button>\</md-toast>',
      hideDelay: 0
    });*/
  }

  DisplaySuccess(text: string): void {
    /*this.$mdToast.show({
      position: this.toastPosition,
      controller: () => {
        this.content = text;
      },
      controllerAs: "toast",
      template: '<md-toast>\{{toast.content}}\<md-icon md-font-set="material-icons" style="color:#259b24"> done </md-icon>\</md-toast>',
      hideDelay: 1000
    });*/
  }
}

// Got some help from https://stackoverflow.com/questions/33478273/angular-material-toast-using-typescript
