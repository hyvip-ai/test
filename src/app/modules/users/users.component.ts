import { Component,HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service:DataService,private router:Router) { }
  users:any = null
  usernames:any = null
  samllerScreenUI:boolean = false
  readusers:boolean = false
  innerWidth:any = 0;
  ngOnInit(): void {
      if(!localStorage.getItem('loggedin')){
      localStorage.setItem('loginmessege','Log In to Access The Page')
      this.router.navigate(['/signin'])
    }
    this.service.getusers().subscribe(res=>{
      this.users = res
      // console.log(this.users)
      this.usernames = this.users[3].users
      console.log(this.users)
      this.readusers = true
    })
  }
  redir(item:any){
    console.log(item);
    this.router.navigate([`/${item}`])
  }
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;
  //   if (this.innerWidth <= 596) {
  //     this.samllerScreenUI = true; 
  //   } else {
  //     this.samllerScreenUI = false;
  //   }
  // }

}
