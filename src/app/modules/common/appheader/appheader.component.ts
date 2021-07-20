import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss'],
})
export class AppHeaderComponent {
  fullName = localStorage.getItem('name');
  email = localStorage.getItem('email');
   username = localStorage.getItem('name');
}
