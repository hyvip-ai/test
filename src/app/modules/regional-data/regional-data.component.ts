import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'
import { constants } from "../../global/constants";

@Component({
  selector: 'app-regional-data',
  templateUrl: './regional-data.component.html',
  styleUrls: ['./regional-data.component.scss'],
})
export class RegionalDataComponent implements OnInit {
   constructor(private service:DataService,private router:Router,private aroute:ActivatedRoute) {}
  username = 'Pranav';
  showmygraph:any = false
  mystates:any = []

  state:any = false 
  uniquestates:any =[]
  numofdistricts:any = 0
  uniquedistricts:any = []
  temp:any = null
totalscans:any = 0
    statescan:any = 0
  crops = constants.crops;
  machineType = constants.machineType;
  mainstatedata:any = []
  indiaStates = constants.indiaState;
  userType = constants.userType
  
  machinedata:any = []


 
  data = [72, 72, 72, 72, 72];
  labels = ['Punjab', 'Bihar', 'Uttar Pradesh', 'Maharashtra', 'Gujarat'];



  mymachineData:any = [];
  machinescanData:any = [];
  machinelabels:any = ['Machine 1','Machine 2','Machine 3','Machine 4'];
  machinelegend:any = ['Number of machine', 'Number of scans'];

  userData:any = [];
  userscanData:any = [];
  userlabels:any = [];
  userlegend:any = ['Number of users', 'Number of scans'];

  cropData:any = [];
  cropLabels:any = [];

  totalscandata:any = []
  totalscanlabels:any = ['Good','Average','Bad']

  innerWidth;
  sizeOfMap;
  topPercent;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
    this.service.getallstate().subscribe(res=>{
      console.log(res)
     this.mainstatedata = res
     
      this.mymachineData = this.mainstatedata[0].machine_num;
      this.machinescanData = this.mainstatedata[0].machine_scan;
      this.cropData = this.mainstatedata[0].crop_scan
      this.cropLabels = this.mainstatedata[0].crop_type
      this.userData = this.mainstatedata[0].user_num
      this.userscanData = this.mainstatedata[0].user_scan
      this.userlabels = this.mainstatedata[0].user_type
     
      this.totalscandata.push(Math.floor((this.mainstatedata[0].good_scan/this.mainstatedata[0].total_scan)*100))
      this.totalscandata.push(Math.floor((this.mainstatedata[0].average_scan/this.mainstatedata[0].total_scan)*100))
      this.totalscandata.push(Math.floor((this.mainstatedata[0].bad_scan/this.mainstatedata[0].total_scan)*100))
      this.showmygraph = true;
    })
      
        this.service.getmachinedata().subscribe(res=>{
             console.log(res)

        this.machinedata = res;
        // for(let item of this.temp){
        //   this.machinedata.push(item.data)
        // }
       
        console.log(this.machinedata)
    
        // console.log(this.mymachineData)
        // console.log(this.scanData)
         for(let item of this.machinedata){
          // console.log(item)
          this.totalscans = this.totalscans + item.total_scans

        }
        let mydistrict = []

                for(let item of this.machinedata){
          console.log(item.states)

          this.mystates = this.mystates.concat(item.states)
          mydistrict = mydistrict.concat(item.districts)
        }
        console.log(this.mystates)
           for(let item of mydistrict){
          if(this.uniquedistricts.includes(item)){
            continue;
          }
          else{
            this.uniquedistricts.push(item)
          }
        }
        this.numofdistricts = this.uniquedistricts.length

        for(let item of this.mystates){

          if(this.uniquestates.includes(item)){
            continue;
          }
            else{
              this.uniquestates.push(item)
            }
        }

        console.log(this.uniquestates)
        this.statescan = this.uniquestates.length
        this.state = true
        })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
  }

  setMapOptions(){
    this.sizeOfMap = '450px';
    this.topPercent = '25px';
    if(this.innerWidth < 380){
      this.sizeOfMap = '300px';
      this.topPercent = '145px';
    }
    else if (this.innerWidth < 460) {
      this.sizeOfMap = '350px';
      this.topPercent = '100px';
    }
    else if (this.innerWidth < 613) {
      this.sizeOfMap = '400px';
      this.topPercent = '100px';
    }
    else if (this.innerWidth < 960) {
      this.sizeOfMap = '450px';
      this.topPercent = '60px';
    }
    else if (this.innerWidth < 993) {
      this.sizeOfMap = '350px';
      this.topPercent = '60px';
    }
    else if (this.innerWidth < 1080) {
      this.sizeOfMap = '400px';
      this.topPercent = '40px';
    }
  }

  selectedcrop:any = null
  statechange(){
    this.selectedcrop = document.getElementById('selectcrop')
    console.log(this.selectedcrop.value)
    this.service.getselectedstate(this.selectedcrop.value).subscribe(res=>{
      console.log(res)
      let temp = res;
      this.showmygraph = false;
      this.mymachineData.splice(0,this.mymachineData.length)
      this.mymachineData = temp.machine_num;
      this.machinescanData.splice(0,this.machinescanData.length)
      this.machinescanData = temp.machine_scan;
      this.cropData.splice(0,this.cropData.length)
      this.cropData = temp.crop_scan
      this.cropLabels.splice(0,this.cropLabels.length)
      this.cropLabels = temp.crop_type
      this.userData.splice(0,this.userData.length)
      this.userData = temp.user_num
      this.userscanData.splice(0,this.userscanData.length)
      this.userscanData = temp.user_scan
      this.userlabels.splice(0,this.userlabels.length)
      this.userlabels = temp.user_type
      let tottalscandatatemp =[]
      tottalscandatatemp.push(Math.floor((temp.good_scan/temp.total_scan)*100))
      tottalscandatatemp.push(Math.floor((temp.average_scan/temp.total_scan)*100))
      tottalscandatatemp.push(Math.floor((temp.bad_scan/temp.total_scan)*100))
      this.totalscandata.splice(0,this.totalscandata.length)
      this.totalscandata = tottalscandatatemp
      this.showmygraph = true;
    })
  }

}
