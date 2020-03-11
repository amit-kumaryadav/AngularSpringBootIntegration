import { BackendCallService } from './backend-call.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService : BackendCallService , private _router : Router){

  }

  canActivate() : boolean {
    if(localStorage.getItem("token") != null && localStorage.getItem("token"))
        return true;
     return false;
  }
}
