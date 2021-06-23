import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-scan-data',
  templateUrl: './scan-data.component.html',
  styleUrls: ['./scan-data.component.scss'],
})
export class ScanDataComponent {
   constructor(private aroute: ActivatedRoute,private service:DataService,private router:Router) {
   

  
  }
    

  data:any = null 
  total:any = null
  main:any = []

   ngOnInit(){

    this.service.getscanresults(this.aroute.snapshot.params.scan_data).subscribe(res=>{
    
   
      this.data = res;
      for(let key in this.data){
      this.main.push(this.data[key])
      }

      console.log(this.main)
    })
 
  } 

  



}
