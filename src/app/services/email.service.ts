import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiURL: string = 'http://finddylan.com:80/email';
  constructor(public httpClient: HttpClient) { }


  public sendEmail(name: string, email: string, message: string) {
    try {

      let req = {
        'name': name,
        'email': email,
        'message': message
      }
      return this.httpClient.post<any>(this.apiURL, req);
    } catch(err) {
      console.log(err);
    }
  }
}
