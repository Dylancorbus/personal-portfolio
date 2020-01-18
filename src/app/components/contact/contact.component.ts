import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public name: string;
  public email: string;
  message: string;
  public count: number;
  constructor(private emailService: EmailService) { 
    this.count = 0;
  }

  ngOnInit() {
  }

  contactMe() {
    if(this.name && this.email && this.message) {
      if(this.count < 1) {
        ++this.count;
        this.emailService.sendEmail(this.name, this.email, this.message).subscribe((data: any) => {
        });
      }
    }
    (<HTMLInputElement>document.getElementById('nme')).value = '';
    (<HTMLInputElement>document.getElementById('eml')).value = '';
    (<HTMLInputElement>document.getElementById('msg')).value = '';
  }

}
