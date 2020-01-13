import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public showJobs: boolean = true;
  public showTicket: boolean = false;
  public showAmex: boolean = false;
  public showSweet: boolean = false;
  public showSouth: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  ticketmaster() {
    this.showJobs = false;
    this.showTicket = true;
  }

  americanExpress() {
    this.showJobs = false;
    this.showAmex = true;
  }

  sweetEarthFoods() {
    this.showJobs = false;
    this.showSweet = true;
  }

  southCountyChrysler() {
    this.showJobs = false;
    this.showSouth = true;
  }

  backToJobs() {
    this.showTicket = false;
    this.showAmex = false;
    this.showSweet = false;
    this.showSouth = false;
    this.showJobs = true;
  }

}
