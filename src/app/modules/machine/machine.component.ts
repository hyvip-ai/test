import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-machine-data',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent implements OnInit{
  constructor(private service:DataService,private router:Router,private aroute:ActivatedRoute) {}
 temp:any= null;
  selectedMachineIndex = 0;
  machineOption = ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'];

  machineCardData = [
    {
      name: 'Machine 1',
      no: '1320',
      scan: '19222',
      percentage: '80',
    },
    {
      name: 'Machine 2',
      no: '1320',
      scan: '19222',
      percentage: '80',
    },
    {
      name: 'Machine 3',
      no: '1320',
      scan: '19222',
      percentage: '80',
    },
    {
      name: 'Machine 4',
      no: '1320',
      scan: '19222',
      percentage: '80',
    },
  ];

  cropData = [
    {
      crop: 'Maize',
      scans: '123',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Wheat',
      scans: '45',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Rice',
      scans: '323',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Barley',
      scans: '232',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Millet',
      scans: '415',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
  ];

  cropScanData = [60, 65, 40, 55, 80];
  cropScanLabels = ['Millet', 'Maize', 'Barley', 'Wheat', 'Rice'];

  doughnutChartData = [32, 32, 36];
  doughnutChartLabels = ['Good', 'Bad', 'Average'];

  scansByMonthLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  scansByMonthData = [
    257,
    190,
    210,
    220,
    230,
    175,
    135,
    245,
    225,
    230,
    235,
    240,
  ];

  userData = [
    {
      user: 'Farmer',
      scans: '123',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      user: 'Broker',
      scans: '45',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      user: 'Trader',
      scans: '323',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      user: 'Inspector',
      scans: '232',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      user: 'Technician',
      scans: '415',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
  ]; 

  userBarData = [320, 332, 301,200,300];
  scanBarData = [220, 182, 191,150,289];
  labels2 = ['Farmer', 'Trader','Inspector','Technician','Broker'];
  legend2 = ['Number of users', 'Number of scans'];

  selectedCropIndex = 0;
  selectUserIndex = 0; 



  changeSelectedCrop(index) {
    this.selectedCropIndex = index;
  }

  changeSelectedUser(index) {
    this.selectUserIndex = index;
  }

  innerWidth;
  samllerScreenUI = false;
  sizeOfMap;
  leftPercent;
  topPercent;
  usernumbers = []
  noofscans = []
  usertemp:any = null;
  numbertemp:Number = 0
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1302) {
      this.samllerScreenUI = true;
    }
    this.setMapOptions();
 
 this.service.getmachinedata().subscribe(res=>{
      this.machineCardData.splice(0,this.machineCardData.length)
      this.temp = res;
      for(let item of this.temp){
        this.machineCardData.push(item.data);
      }
      console.log(this.machineCardData)
    })
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
    this.scanBarData.push(0,this.scanBarData.length)
    this.scanBarData = this.noofscans
    console.log(this.usernumbers,this.noofscans,this.userBarData,this.scanBarData)
  })
  this.service.getmachinestates(1).subscribe(res=>{
    
      this.mymachinestatestemp = res;
      this.mymachinestates.splice(0,this.mymachinestates.length);
      
      this.mymachinestates = this.mymachinestatestemp.data.states ;
       this.previousstates.splice(0,this.previousstates.length);
     this.previousstates = this.mymachinestates;
     console.log(this.mymachinestates,this.previousstates)
      
    })
        

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
  }

  setMapOptions(){
    this.sizeOfMap = '700px';
    this.topPercent = '20px';
    if (this.innerWidth < 322) {
      this.sizeOfMap = '300px';
      this.topPercent ='80px';
    }
    else if (this.innerWidth < 475) {
      this.sizeOfMap = '350px';
      this.topPercent = '60px';
    }
    else if (this.innerWidth < 565) {
      this.sizeOfMap = '450px';
      this.topPercent = '40px';
    }
    else if (this.innerWidth < 655) {
      this.sizeOfMap = '550px';
    }
    else if(this.innerWidth < 700){
      this.sizeOfMap = "650px";
    }
    else if(this.innerWidth < 930){
    }
  }
  mymachinestates:any = ['Gujarat','Punjab','West Bengal']
   previousstates:any = ['Gujarat','Punjab','West Bengal']

  mymachinestatestemp:any = null

  
  changeMachine(i:any) {

    this.selectedMachineIndex = i;

  
  
       
     this.previousstates = this.mymachinestates;
   

    
    this.service.getmachinestates(i+1).subscribe(res=>{
    
      this.mymachinestatestemp = res;
    
      
      this.mymachinestates = this.mymachinestatestemp.data.states ;

            
    })
  }



}
