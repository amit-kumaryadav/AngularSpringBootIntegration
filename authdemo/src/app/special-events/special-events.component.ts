import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendCallService } from './../backend-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  eventList: any;
  toogle: boolean = false;
  rowColors: any = ["success", "danger", "info", "warning", "active"];
  switchtoggle: String;
  constructor(private _backEndCallService: BackendCallService) {
    this.switchtoggle = "Toogle to add event";
  }
  formdata = new FormGroup({});
  ngOnInit() {
    this._backEndCallService.getSpecialEventList().subscribe(data => {
      this.eventList = data;
    }, error => {
      alert("Not able to fetch event list");
    });
    this.formdata = new FormGroup({
      orgname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      eventName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      place: new FormControl('', Validators.compose([
        Validators.required
      ])),
      eventDescription: new FormControl('', Validators.compose([
        Validators.required
      ])),
      link: new FormControl('', Validators.compose([
        Validators.required
      ]))

    });
  }

  setToggleStatus() {
    this.toogle = !this.toogle;
    if (this.toogle) {
      this.switchtoggle = "Toogle to see event list";
    } else {
      this._backEndCallService.getSpecialEventList().subscribe(data => {
        this.eventList = data;
      }, error => {
        alert("Not able to fetch event list");
      });
      this.switchtoggle = "Toogle to add event";
    }

  }

  submitForm(formValue) {
    console.log(formValue);
    this._backEndCallService.createSpecialEvent(formValue).subscribe(data => {
      this.resetForm();
      alert("Event registerd sucssefully!!");
    },
      error => {
        alert("Something went wrong event not registered!!");
      });
  }
  resetForm() {
    this.formdata.reset();
  }

}
