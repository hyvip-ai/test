import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-farmer-data',
  templateUrl: './farmer-data.component.html',
  styleUrls: ['./farmer-data.component.scss'],
})
export class FarmerDataComponent {
farmerdata:any = null
visible:boolean = false
showingdata:boolean = true
numoffarmers:any = null
constructor(private service:DataService,private router:Router){}
  ngOnInit(){
   this.service.getfarmers().subscribe(res=>{
   console.log(res);
   this.farmerdata = res;
   this.numoffarmers = this.farmerdata.length
   })

  }
  checkscans(item:any){
  
  this.router.navigate([`/Farmers/${item}`])
 
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
