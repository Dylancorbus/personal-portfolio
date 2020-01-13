import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'personal-portfolio';

  constructor() { }

  ngOnInit() {
    document.querySelector('#start').addEventListener("click",() => {
      document.querySelector('#about').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });  
  }
}
