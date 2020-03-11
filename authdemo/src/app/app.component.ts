import { AppserviceService } from './appservice.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user : any;
  constructor(private appService : AppserviceService, private _router : Router){
    this.appService.hide();
    this.user = this.appService.getUser();
    console.log(this.user);
    if(this.user == null){
      this.user = {'userName': null};
    }
  }
  title = 'authdemo';
  logoutUser(){
    localStorage.removeItem("token");
    this.appService.hide();
    this.user = this.appService.getUser();
    if(this.user == null){
      this.user = {'userName': null};
    }
    this._router.navigate(['/login']);

  }
}
