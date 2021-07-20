import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router , ActivatedRoute} from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'dashboard';
  options: FormGroup;
  showSideBar = true;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(fb: FormBuilder, private router: Router,private ar:ActivatedRoute,private service:DataService) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0,
    });
  }

  innerWidth;
  samllerScreenUI = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <992) {
      this.samllerScreenUI = true;
    } else {
      this.samllerScreenUI = false;
    }
  }

  showlogin:boolean = false
  ngOnInit(): void {
    console.log(window.location.href)
    var b = window.location.href.split('/');
    console.log(b);
    if( !b.includes('home') && !b.includes('regional-data')&& !b.includes('machine')&& !b.includes('crop') && !b.includes('users') && !b.includes('Farmers') && !b.includes('Traders') && !b.includes('Technician') && !b.includes('Inspector') && !b.includes('Brokers')){
      console.log('asche ekhane')
      if(localStorage.getItem('loggedin')){
        localStorage.removeItem('loggedin')
      }
    }
   if(localStorage.getItem('loggedin')){
    this.showlogin = false
   }
   else{
    this.showlogin = true
   }
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <992) {
      this.samllerScreenUI = true;
    }

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/signin') {
          this.showSideBar = false;
        }
      }
      window.scrollTo(0, 0);
      $('html, body').css({ overflow: 'hidden' });
      $(function () {
        setTimeout(function () {
          $('html, body').css({
            overflow: 'auto',
          });
        }, 800);
      });
    });
  }

  close(reason: string) {
    console.log('closehocche')
    this.sidenav.close();
  }
// @HostListener('window:beforeunload',['$event'])
// onWindowClose(event){
//   console.log('call hocche')
//   alert('Please log out')
//   event.preventDefault();
//   event.returnValue = false
// }

}
