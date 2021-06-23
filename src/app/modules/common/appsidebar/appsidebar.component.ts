import { Component } from '@angular/core';
import { constants } from './../../../global/constants';
@Component({
  selector: 'app-sidebar',
  templateUrl: './appsidebar.component.html',
  styleUrls: ['./appsidebar.component.scss'],
})
export class AppSidebarComponent {
  sideBarItemsList = constants.MENUS;

  constructor(){
  }
}
