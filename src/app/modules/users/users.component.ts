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
  usernames:Array<string> = ['Farmers','Traders','Inspectors','Technicians','Brokers']
  samllerScreenUI:boolean = false
  readusers:boolean = true
  innerWidth:any = 0;
  ngOnInit(): void {
    console.log(this.usernames)
  }
  redir(item:any){
    console.log(item);
    this.router.navigate([`/${item}`])
                          setInterval(()=>{
                            location.reload()
                          },1000)
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
