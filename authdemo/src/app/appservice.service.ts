import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  visible: boolean
  user: any;
  constructor() { }

  hide(): boolean {
    this.visible = false;
    if (localStorage.getItem("token") != null && localStorage.getItem("token"))
      this.visible = true;
    return this.visible;
  }

  getUser(): any {
     this.user = JSON.parse(localStorage.getItem("token"));
    return this.user;
  }
}
