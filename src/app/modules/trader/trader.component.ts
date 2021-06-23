import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss']
})
export class TraderComponent implements OnInit {
  traderdata:any = null
  visible:boolean = false
  numberoftraders:any = null
  showingdata:boolean = true
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    this.service.gettraders().subscribe(res=>{
      console.log(res);
      this.traderdata = res;
      this.numberoftraders = this.traderdata.length
    })
  }

  checkscans(item:any){
  
    this.router.navigate([`/Traders/${item}`])
   
    }
  
    onchin(){
    if(this.showingdata){
    this.showingdata = false
    }
    else{
    this.showingdata = true;
    }
    }

}
