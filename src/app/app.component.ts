import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  options: FormGroup;
  showSideBar = true;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(fb: FormBuilder, private router: Router) {
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
    if (this.innerWidth <= 900) {
      this.samllerScreenUI = true;
    } else {
      this.samllerScreenUI = false;
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 900) {
      this.samllerScreenUI = true;
    }

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/signUp') {
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
}
