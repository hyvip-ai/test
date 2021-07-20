import { Component } from '@angular/core';
import { constants } from './../../../global/constants';
import {Router} from '@angular/router'
@Component({
  selector: 'app-sidebar',
  templateUrl: './appsidebar.component.html',
  styleUrls: ['./appsidebar.component.scss'],
})
export class AppSidebarComponent {
  sideBarItemsList = constants.MENUS;

  constructor(private router:Router){
  }
  logout(){
    // console.log('click hocche')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('loggedin')
    this.router.navigate(['/signin'])
    setInterval(()=>{
      location.reload();
    },1000)
  }
}
