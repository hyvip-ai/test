import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MessegeService } from 'src/app/services/messege.service'
@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.scss']
})
export class BrokersComponent implements OnInit {
  mainsearched:any = []
farmerdata:any = []
farmerdatatemp:any = null
sortingdupli:any = []
farmerscandatatemp:any = []
farmerscandata:any = []
jsonData:any = []
visible:boolean = false
temp:any = []
showsorted:any = false
scanshow:any = []
scandetails:any = []
numoffarmers:any = null
show:any = []
scanlength:any = []
jsonstring:any = null

constructor(private service:DataService,private router:Router,private msgservice:MessegeService){}
  ngOnInit(){
    // this.msgservice.requestPerm()
      this.service.getbrokers().subscribe(res=>{
        // console.log(res)
        this.farmerdatatemp = res
        this.numoffarmers = this.farmerdatatemp.length
        for(let item of this.farmerdatatemp){
          this.farmerdata.push(item)
          this.show.push(false)
        }

       
        
        this.service.getbrokersscans().subscribe(res=>{
          
          for(let item of res){
            delete item.user_type
            
            this.farmerscandata.push(item)
          
           
          }
            var searched = this.farmerscandata;
 
  for(let item of searched){
    for(let key in item){
      this.mainsearched.push(item[key])
    }
  }
    let jsonstring = []
          for(let item of this.farmerscandata){
        
            for(let key in item){
              jsonstring.push(item[key])
            }
          }
          for(let item of jsonstring){
            let tempobject = {
              Name:"no name",
              Phone:"45", 
              Machine:"Machine2",
              Crop:"rice",
              date:"0",
              }

            tempobject.Name = item.name;
            tempobject.Crop = item.crop;
            tempobject.Machine = item.machine;
            tempobject.Phone = item.ph_no;
            var b = new Date(item.time)
            tempobject.date =`${b.getDate()}/${b.getMonth()+1}/${b.getFullYear()}` 
            for(let i=0;i<item.details.length;i++){
              tempobject[item.details[i]] = item.numbers[i]
            }
            this.jsonData.push(tempobject)
          }
          

          // console.log(this.jsonData)
          
          for(let item of this.farmerscandata){
           // console.log(item)
           for(let key in item){
            // console.log()
            // console.log(item.location)
            var lat = item[key].location._lat
            var long = item[key].location._long
            this.getreversegeocoding(lat,long,item[key])
           
            // item[key].location_name = sname
            // console.log(item[key]);
           }
          
          }
          
          // console.log(this.locationdone)
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
b :any = null
getreversegeocoding(lat:number,long:number,newitem:any){
// this.service.getlocationname(lat,long).subscribe(res=>{
//   this.b = res;
//   // console.log(lat,long);
//   for(let item of this.b.localityInfo.administrative){
//     if(item.description){
//       var a = item.description
//       var b = a.split(' ')
//       if(b.includes('district')){
//          var district = item.name
//       // console.log(district);
//       }
     
//     }
//   }
//   var locationName = `${this.b.locality}, ${district}, ${this.b.principalSubdivision}`
//   // console.log(locationName)
//  newitem.location_name = locationName
//  // console.log(newitem)
// })
newitem.location_name = 'N/A'
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

showactive:boolean = false
toogleshow(i:any){

  if(this.show[i]){
    this.show[i] = false
  }
  else{
    this.show[i] = true
  }

  if(this.show.includes(true)){
    this.showactive = true
  }
  else{
    this.showactive = false
  }
  console.log(this.showactive)
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
remainactive:boolean = false
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
    if(this.scanshow.includes(true)){
      this.remainactive = true;
    }
    else{
      this.remainactive = false
    }
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
      this.showsorted = true

      if(this.showsearchresults){
        console.log(this.showsorted,this.showsearchresults)
        this.bothtrue = this.searchresult.sort(this.compare)
      }
      else{
      this.sortingdupli.sort(this.compare)
    }
      
    }
    if(this.sortingvalue == 'name'){
      this.showsorted = true
        if(this.showsearchresults){
        this.bothtrue= this.searchresult.sort(this.namecompare)
      }
      else{
      this.sortingdupli.sort(this.namecompare)
    }

      
    }
    for(let item of this.sortingdupli){
      this.getreversegeocoding(item.location._lat,item.location._long,item);
    }
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
  download(){
    this.service.downloadFile(this.jsonData, 'Farmer Scan Data');
  }
  searchedFarmerName:any = null
  searchresult:any = []
  showsearchresults:boolean = false
  bothtrue:any = []
searchfarmer(){
  if(this.searchedFarmerName==''){
    this.showsearchresults = false
  }
  else{
    this.showsearchresults = true
  }
  // console.log(this.searchedFarmerName)
  var re = new RegExp(this.searchedFarmerName+'.+$','i');
  // console.log(re)
if(this.showsorted){
  this.bothtrue = this.sortingdupli.filter((e,i,a)=>{
     return e.name.search(re) != -1;
  })
   for(let item of this.bothtrue){

    this.getreversegeocoding(item.location._lat,item.location._long,item); 
  }
}
else{
    this.searchresult = this.mainsearched.filter((e,i,a)=>{
    // console.log(e.name)
    return e.name.search(re) != -1;
  })
  for(let item of this.searchresult){

    this.getreversegeocoding(item.location._lat,item.location._long,item); 
  }
  // console.log(this.searchresult);
}
}
  selectcheck:any =null
  checkall:boolean = false
allselect(){
  this.selectcheck = document.getElementById("select_all");
  this.checkall = this.selectcheck.checked;
  console.log(this.checkall)
  
}
modalvisisble:boolean = false;
modalimgurl:any = null
showmodal(url:any){
console.log(url)
this.modalvisisble = true;
this.modalimgurl = url;
}
closemodal(){
this.modalvisisble = false;
this.modalimgurl = null
}

}
