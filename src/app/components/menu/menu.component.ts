import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('stickyMenu', null) menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { 
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll')
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

    scrollToElement(id: string): void {
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

}
