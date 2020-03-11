import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendCallService {
  private usertocken: any;
  private url: string;
  private registrationURL: string;
  private eventListURL: string;
  private specailEventListURL: string;
  private addEventsURL : string;
  private addSpecialEventsURL : string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:9898/login/loginUser";
    this.registrationURL = "http://localhost:9898/login/createUser";
    this.eventListURL = "http://localhost:9898/events/getEvent";
    this.specailEventListURL = "http://localhost:9898/events/getSpecialEvent";
    this.addEventsURL = "http://localhost:9898/events/addEvents";
    this.addSpecialEventsURL = "http://localhost:9898/events/addSpecialEvents";
  }
  register(reqBody): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.registrationURL, reqBody);
  }
  authenticateUser(query): Observable<HttpResponse<boolean>> {
    return this.http.get<any>(this.url + query);
  }

  getEventList(): Observable<HttpResponse<any[]>> {
    return this.http.get<any>(this.eventListURL);
  }

  getSpecialEventList(): Observable<HttpResponse<any[]>> {
    return this.http.get<any>(this.specailEventListURL);
  }
  createEvent(reqBody): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.addEventsURL, reqBody);
  }
  createSpecialEvent(reqBody): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.addSpecialEventsURL, reqBody);
  }
}
