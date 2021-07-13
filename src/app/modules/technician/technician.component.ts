import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent implements OnInit {

 farmerdata:any = []
farmerdatatemp:any = null
sortingdupli:any = []
farmerscandatatemp:any = []
farmerscandata:any = []
visible:boolean = false
temp:any = []
showsorted:any = false
scanshow:any = []
scandetails:any = []
numoffarmers:any = null
show:any = []
scanlength:any = []
constructor(private service:DataService,private router:Router){}
  ngOnInit(){
  
      this.service.gettechinician().subscribe(res=>{
        // console.log(res)
        this.farmerdatatemp = res
        this.numoffarmers = this.farmerdatatemp.length
        for(let item of this.farmerdatatemp){
          this.farmerdata.push(item)
          this.show.push(false)
        }

       
        
        this.service.gettechnicianscans().subscribe(res=>{
          
          for(let item of res){
            delete item.user_type
            
            this.farmerscandata.push(item)
            // console.log(this.farmerscandata);
           
          }

          // for(let item of this.farmerscandata){
            
          //   for(let key in item){
          //     console.log(key)
          //     this.scandetails.push(item[key])
          //     this.scanshow.push(false);
             
          //   } 
          //    this.scanlength.push(this.scanshow.length)
          //   console.log(this.scanlength)
          // }
console.log('new approach')
          for(let item of this.farmerscandata){
                for(let key in item){
                  this.keyarray.push(key)
                }
                this.keyarray.sort(this.keyarraysortnum)
                // console.log(this.keyarray)
                for(let i=0;i<this.keyarray.length;i++){
                  for(let key in item){
                   
                      // console.log(this.keyarray[i])
                      if(this.keyarray[i] == key){
                        // console.log(key)
                        this.scandetails.push(item[key])
                        // console.log(this.scandetails)
                        this.scanshow.push(false);
                      }
                    }
                  }
                
                if(this.scanlength.length==0){
                  this.scanlength.push(this.keyarray.length)
                }
                else{
                  this.scanlength.push(this.scanlength[this.scanlength.length-1]+this.keyarray.length)
                }
                // console.log(this.scanlength)
                this.keyarray.splice(0,this.keyarray.length)

          }


        })
        
      })



        }

keyarray:any = []

keyarraysortnum(a,b){
  if(a>b){
    return 1;
  }
  else if(a==b){
    return 0;
  }
  else{
    return -1;
  }

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
    // console.log(e.target.checked)

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
 
  // console.log(i)
  if(this.scanshow[i]){
    this.scanshow[i]=false
  }
    else{
      this.scanshow[i]=true
    }
    // console.log(this.scanshow)
    // console.log(this.scanlength)
}


sortingvalue:any = null
nothing:any = null
sortscan(){
    // console.log(document.getElementById('mysort')!.value)
    this.nothing = document.getElementById('mysort')
    this.sortingvalue = this.nothing.value
    // console.log(this.sortingvalue)

    for(let i=0;i<this.scandetails.length;i++){
      this.sortingdupli[i] = this.scandetails[i]
    }
    // console.log(this.sortingdupli)

   if( this.sortingvalue=='normal'){
    // console.log('normal')
    this.showsorted = false
    // console.log(this.showsorted)
   }
    if(this.sortingvalue == 'time'){

      this.sortingdupli.sort(this.compare)
      this.showsorted = true
    }
    if(this.sortingvalue == 'name'){
      this.sortingdupli.sort(this.namecompare)
      this.showsorted = true
    }
  // console.log(this.sortingdupli)
    
  //   console.log(this.showsorted)
}
namecompare(a, b){
  console.log('name compare hocche')
    if(a.name < b.name) { 
      return -1;
       }
    if(a.name > b.name) { 
      return 1;
       }
    return 0;
}

compare(a,b){
  console.log('time compare hocche')
  if(a.time<b.time){
    // console.log(a.time,b.time)
    // console.log('dhukche')
    return 1;
  }

  else if(a.time==b.time){
    return 0
  }

  else{

  return -1;
}
}
ph_no:any = null
  addData(){
      for(let i=0;i<5;i++){
      console.log('asche')
    
      
        this.ph_no =  this.service.addfarmer()
    
      
        console.log(this.ph_no)
      }


}
addscan(){
  console.log('hocche')
}

}
