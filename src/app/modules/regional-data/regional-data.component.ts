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
  machinegraph:any = false
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

  indiaStates = constants.indiaState;
  userType = constants.userType
   usernumbers = []
  noofscans = []
  machinedata:any = []

  usertemp:any = null;
  numbertemp:Number = 0
  userBarData = [320, 332, 301];
  scanBarData = [220, 182, 191];
  data = [72, 72, 72, 72, 72];
  labels = ['Punjab', 'Bihar', 'Uttar Pradesh', 'Maharashtra', 'Gujarat'];

  cropData = [267, 190, 200, 210, 225, 145, 180, 140];
  cropLabels = ['Rice', 'Wheat', 'Barley', 'Maize', 'Millet', 'Jowar'];

  mymachineData = [320, 332, 301, 334];
  scanData = [220, 182, 191, 234];
  labels1 = ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'];
  legend1 = ['Number of machine', 'Number of scans'];

  userData = [320, 332, 301];
  scanData1 = [220, 182, 191];
  labels2 = ['Farmer','Trader','Inspector','Technician','Broker'];
  legend2 = ['Number of users', 'Number of scans'];

  innerWidth;
  sizeOfMap;
  topPercent;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
     this.service.getfarmers().subscribe(res=>{

    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
    }
    this.noofscans.push(this.numbertemp)
  })

    this.service.gettraders().subscribe(res=>{
this.numbertemp = 0
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
    }
    this.noofscans.push(this.numbertemp)
  })
    this.service.getpolice().subscribe(res=>{
this.numbertemp = 0
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
    }
    this.noofscans.push(this.numbertemp)
  })

           this.service.gettechinician().subscribe(res=>{
this.numbertemp = 0
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
    }
    this.noofscans.push(this.numbertemp)
  })


        this.service.getbrokers().subscribe(res=>{
          this.numbertemp = 0

    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
    }
    this.noofscans.push(this.numbertemp)
    this.userBarData.splice(0,this.userBarData.length)
    this.userBarData = this.usernumbers
    this.scanBarData.splice(0,this.scanBarData.length)
    this.scanBarData = this.noofscans
    console.log(this.usernumbers,this.noofscans,this.userBarData,this.scanBarData)
  })

        this.service.getmachinedata().subscribe(res=>{
             console.log(res)

        this.temp = res;
        for(let item of this.temp){
          this.machinedata.push(item.data)
        }
       
        console.log(this.machinedata)
        for(let i=0;i<this.machinedata.length;i++){
          this.mymachineData[i] = this.machinedata[i].no_of_machines
          this.scanData[i] = this.machinedata[i].total_scans
        }
        this.machinegraph = true
        console.log(this.mymachineData)
        console.log(this.scanData)
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

}
