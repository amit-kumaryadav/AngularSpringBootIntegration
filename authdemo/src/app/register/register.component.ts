import { Router } from '@angular/router';
import { BackendCallService } from './../backend-call.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private backendCall : BackendCallService, private _router : Router) { }
  private userDetails = {};
  formdata = new FormGroup({});
  ngOnInit() {
     this.formdata = new FormGroup({
      userName : new FormControl('', Validators.compose([
        Validators.required
      ])),
      email : new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password : new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ]))

    });
  }
  submitForm(formValue){
    this.backendCall.register(formValue).subscribe(data => {
      if(data){
        this.resetForm();
        alert("Event Added successfully!");
      }else{
        alert("User already exists, Please Try With Another Username Or Email");
      }
    },
      error => {
        alert("Something went wrong user not registered!!");
       });
  }
  resetForm(){
    this.formdata.reset();
  }

}
