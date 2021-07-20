import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.scss'],
})
export class ComponentHeaderComponent {
  username = localStorage.getItem('name');
  innerWidth;
  samllerScreenUI = false;
  sizeOfMap;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1302) {
      this.samllerScreenUI = true;
    }
    this.sizeOfMap = this.innerWidth / 2 - 50;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1302) {
      this.samllerScreenUI = true;
    } else {
      this.samllerScreenUI = false;
    }
    this.sizeOfMap = this.innerWidth / 2 - 50;
  }
}
