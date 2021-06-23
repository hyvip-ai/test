import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-traderscandata',
  templateUrl: './traderscandata.component.html',
  styleUrls: ['./traderscandata.component.scss']
})
export class TraderscandataComponent implements OnInit {

  constructor(private aroute: ActivatedRoute,private service:DataService,private router:Router) {
   

  
  }
    

  data:any = null 
  total:any = null
  main:any = []

   ngOnInit(){

    this.service.getscanresults(this.aroute.snapshot.params.id).subscribe(res=>{
    
   
      this.data = res;
      for(let key in this.data){
      this.main.push(this.data[key])
      }

      console.log(this.main)
    })

  } 

}
 