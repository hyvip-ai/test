import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    this.service.getusers().subscribe(res=>{
      this.users = res
      // console.log(this.users)
      this.usernames = this.users[3].users
      console.log(this.users)
    })
  }
  redir(item:any){
    console.log(item);
    this.router.navigate([`/${item}`])
  }

}
