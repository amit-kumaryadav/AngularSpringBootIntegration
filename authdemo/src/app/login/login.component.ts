import { AppserviceService } from './../appservice.service';
import { Router } from '@angular/router';
import { BackendCallService } from './../backend-call.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any;
  formdata = new FormGroup({});
  constructor(private backendCall : BackendCallService, private appService : AppserviceService, private _router : Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      name : new FormControl('', Validators.compose([Validators.required])),
      password : new FormControl('', Validators.compose([Validators.required]))
    });
  }
login(formdata){
  var query  : string;
  query =  "?userName="+formdata.name+"&password="+formdata.password;
  this.backendCall.authenticateUser(query).subscribe(data =>{
    if(data == undefined || data == null){
      alert("user not authenticated");
      return;
    }
    localStorage.setItem("token", JSON.stringify(data));
    this.appService.hide();
    this.user = this.appService.getUser();
    if(this.user == null){
      this.user = {'userName': null};
    }
    this._router.navigate(['/special']);
  },
  error => {
   localStorage.removeItem("token");
   alert("user not authenticated");
  }
  );
}
}
