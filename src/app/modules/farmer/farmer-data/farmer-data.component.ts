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
farmerdata:any = []
farmerdatatemp:any = null
farmerscandatatemp:any = []
farmerscandata:any = []
visible:boolean = false
temp:any = []
scanshow:any = []
scandetails:any = []
numoffarmers:any = null
show:any = []
constructor(private service:DataService,private router:Router){}
  ngOnInit(){
  
      this.service.getfarmers().subscribe(res=>{
        console.log(res)
        this.farmerdatatemp = res
        this.numoffarmers = this.farmerdatatemp.length
        for(let item of this.farmerdatatemp){
          this.farmerdata.push(item)
          this.show.push(false)
        }

       
        
        this.service.getfarmersscans().subscribe(res=>{
          
          for(let item of res){
            delete item.user_type
            
            this.farmerscandata.push(item)
            console.log(this.farmerscandata);
           
          }

          for(let item of this.farmerscandata){
            for(let key in item){
              this.scandetails.push(item[key])
              this.scanshow.push(false);
            }
          }
          console.log(this.scandetails)
          console.log(this.scanshow)

        })
        
      })



        }
toogleshow(i:any){

  if(this.show[i]){
    this.show[i] = false
  }
  else{
    this.show[i] = true
  }
}

expand(e:any){
  console.log(e.target.checked)

 if(e.target.checked){
   for(let i=0;i<this.show.length;i++){
    this.show[i] = true
  }
  for(let i=0;i<this.scanshow.length;i++){
    this.scanshow[i] = true
  }
 }
 else{
     for(let i=0;i<this.show.length;i++){
    this.show[i] = false
  }
   for(let i=0;i<this.scanshow.length;i++){
    this.scanshow[i] = false
  }

 }
}

collapse(e:any){
    console.log(e.target.checked)

 if(e.target.checked){
   for(let i=0;i<this.show.length;i++){
    this.show[i] = false
  }
    for(let i=0;i<this.scanshow.length;i++){
    this.scanshow[i] = false
  }
 }
 else{
     for(let i=0;i<this.show.length;i++){
    this.show[i] = true
  }
     for(let i=0;i<this.scanshow.length;i++){
    this.scanshow[i] = true
  }
 }
}
getdetails(i:any){
 
  console.log(i)
  if(this.scanshow[i]){
    this.scanshow[i]=false
  }
    else{
      this.scanshow[i]=true
    }
}

}

  

