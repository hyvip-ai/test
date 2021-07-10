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
  myusers:any = []
  showusers:any = false
  badtemp:any = 0
  averagetemp:any = 0
  goodtemp:any = 0

  machineCardData = [
   
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

 
  showcropgraph = false
  

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



  changeSelectedCrop(index:any) {
    let graphdata = []
    this.selectedCropIndex = index;
     graphdata.push(this.cropArray[index].good_percentage)
      graphdata.push(this.cropArray[index].bad_percentage)
      graphdata.push(this.cropArray[index].average_percentage)
      this.doughcropdata = graphdata
  }
doughnutChartData = [10,20,70];
doughcropdata =[]
doughnutcropLabels = ['Good', 'Bad', 'Average'];

  doughnutChartLabels = ['Good', 'Bad', 'Average'];
  showgraph:any = false
  changeSelectedUser(index:any) {
    let doughnuttemp = []
    // console.log(index)
     // console.log(this.doughnuttemp)
    // console.log(this.doughnutChartData)
    this.selectUserIndex = index;
    
     // console.log(this.doughnuttemp)
    // console.log(this.doughnutChartData)
    doughnuttemp.push(this.myusers[index].good_percentage)
   doughnuttemp.push(this.myusers[index].bad_percentage)
   doughnuttemp.push(this.myusers[index].average_percentage)
    this.doughnutChartData.splice(0,this.doughnutChartData.length)
    this.doughnutChartData = doughnuttemp
    // console.log(doughnuttemp)
    // console.log(this.doughnutChartData)
    
  }

  innerWidth;
  samllerScreenUI = false;
  sizeOfMap;
  leftPercent; 
  topPercent;
  usernumbers = []
  noofscans = []
  usertemp:any = null;
  numbertemp:number = 0
   cropScanData = [];
  cropScanLabels = [];
  cropArray = []
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1302) {
      this.samllerScreenUI = true;
    }
    this.setMapOptions(); 
    this.service.getcrops().subscribe(res=>{
      console.log(res)
      let temp = res;
      this.cropArray = temp
      let graphdata = []
      for(let croptemp of temp){
        croptemp.good_percentage = Math.floor((croptemp.good_scans/croptemp.total_scans)*100)
      croptemp.average_percentage = Math.floor((croptemp.average_scans/croptemp.total_scans)*100)
      croptemp.bad_percentage = Math.floor((croptemp.bad_scans/croptemp.total_scans)*100)
      
      this.cropScanLabels.push(croptemp.name)
      this.cropScanData.push(croptemp.total_scans)
     
      }
      graphdata.push(temp[0].good_percentage)
      graphdata.push(temp[0].bad_percentage)
      graphdata.push(temp[0].average_percentage)
      this.doughcropdata = graphdata
      this.showcropgraph = true
    })
 this.service.getmachinedata().subscribe(res=>{
      this.machineCardData.splice(0,this.machineCardData.length)
      this.temp = res;
      this.machineCardData = res
      // console.log(res)
      // for(let item of this.temp){
      //   this.machineCardData.push(item.data);
      // }
      // console.log(this.machineCardData)
    for(let item of this.machineCardData){
        item.good_percentage = Math.floor((item.good_scans/item.total_scans)*100)
        item.average_percentage = Math.floor((item.average_scans/item.total_scans)*100)
        item.bad_percentage = Math.floor((item.bad_scans/item.total_scans)*100)
       }
    })
  this.service.getfarmers().subscribe(res=>{
    let  userersobject={
      good_percentage:0,
      average_percentage:0,
      bad_percentage:0,
      total:0,
      user:'person'
    }
    // console.log(res)
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
      this.badtemp = this.badtemp + item.bad_scans
      this.averagetemp = this.averagetemp + item.average_scans
      this.goodtemp = this.goodtemp + item.good_scans
    }
    // console.log(this.goodtemp,this.averagetemp,this.badtemp)
   this.noofscans.push(this.numbertemp)
    userersobject.good_percentage  = Math.floor((this.goodtemp/this.numbertemp)*100)
    userersobject.average_percentage  = Math.floor((this.averagetemp/this.numbertemp)*100)
    userersobject.bad_percentage  = Math.floor((this.badtemp/this.numbertemp)*100)
    userersobject.total = this.numbertemp
   userersobject.user = 'Farmer'
   this.doughnutChartData.splice(0,this.doughnutChartData.length)
   this.doughnutChartData.push(userersobject.good_percentage)
   this.doughnutChartData.push(userersobject.bad_percentage)
   this.doughnutChartData.push(userersobject.average_percentage)
    // console.log(userersobject)
    this.myusers.push(userersobject)
    // console.log(this.myusers)

  
  })

    this.service.gettraders().subscribe(res=>{
       let  userersobject={
      good_percentage:0,
      average_percentage:0,
      bad_percentage:0,
      total:0,
      user:'person'
    }
this.numbertemp = 0
this.badtemp = 0
this.goodtemp = 0
this.averagetemp = 0


    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans
            this.badtemp = this.badtemp + item.bad_scans
      this.averagetemp = this.averagetemp + item.average_scans
      this.goodtemp = this.goodtemp + item.good_scans 
    
    }
  

    this.noofscans.push(this.numbertemp)
     userersobject.good_percentage  = Math.floor((this.goodtemp/this.numbertemp)*100)
    userersobject.average_percentage  = Math.floor((this.averagetemp/this.numbertemp)*100)
    userersobject.bad_percentage  = Math.floor((this.badtemp/this.numbertemp)*100)
    userersobject.total = this.numbertemp

    userersobject.user = 'Trader'
    // console.log(userersobject)
    this.myusers.push(userersobject)
    // console.log(this.myusers)

  })
       this.service.getpolice().subscribe(res=>{
          let  userersobject={
      good_percentage:0,
      average_percentage:0,
      bad_percentage:0,
      total:0,
      user:'person'
    }
           this.numbertemp = 0
this.badtemp = 0
this.goodtemp = 0
this.averagetemp = 0
this.numbertemp = 0
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
        this.badtemp = this.badtemp + item.bad_scans
      this.averagetemp = this.averagetemp + item.average_scans
      this.goodtemp = this.goodtemp + item.good_scans 
    }
    this.noofscans.push(this.numbertemp)
      userersobject.good_percentage  = Math.floor((this.goodtemp/this.numbertemp)*100)
    userersobject.average_percentage  = Math.floor((this.averagetemp/this.numbertemp)*100)
    userersobject.bad_percentage  = Math.floor((this.badtemp/this.numbertemp)*100)
    userersobject.total = this.numbertemp

    userersobject.user = 'Inspector'
    // console.log(userersobject)
    this.myusers.push(userersobject)
    // console.log(this.myusers)
  })

           this.service.gettechinician().subscribe(res=>{
this.numbertemp = 0
this.badtemp = 0
this.goodtemp = 0
this.averagetemp = 0

          let  userersobject={
      good_percentage:0,
      average_percentage:0,
      bad_percentage:0,
      total:0,
      user:'person'
    }
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
      this.badtemp = this.badtemp + item.bad_scans
      this.averagetemp = this.averagetemp + item.average_scans
      this.goodtemp = this.goodtemp + item.good_scans 
    }
    this.noofscans.push(this.numbertemp)
        userersobject.good_percentage  = Math.floor((this.goodtemp/this.numbertemp)*100)
    userersobject.average_percentage  = Math.floor((this.averagetemp/this.numbertemp)*100)
    userersobject.bad_percentage  = Math.floor((this.badtemp/this.numbertemp)*100)
    userersobject.total = this.numbertemp

    userersobject.user = 'Technician'
    // console.log(userersobject)
    this.myusers.push(userersobject)
    // console.log(this.myusers)
  })


        this.service.getbrokers().subscribe(res=>{
          this.numbertemp = 0
this.badtemp = 0
this.goodtemp = 0
this.averagetemp = 0

      let  userersobject={
      good_percentage:0,
      average_percentage:0,
      bad_percentage:0,
      total:0,
      user:'person'
    }
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans
      this.badtemp = this.badtemp + item.bad_scans
      this.averagetemp = this.averagetemp + item.average_scans
      this.goodtemp = this.goodtemp + item.good_scans  
    }
    this.noofscans.push(this.numbertemp)
          userersobject.good_percentage  = Math.floor((this.goodtemp/this.numbertemp)*100)
    userersobject.average_percentage  = Math.floor((this.averagetemp/this.numbertemp)*100)
    userersobject.bad_percentage  = Math.floor((this.badtemp/this.numbertemp)*100)
    userersobject.total = this.numbertemp

    userersobject.user = 'Broker'
    // console.log(userersobject)
    this.myusers.push(userersobject)
    // console.log(this.myusers)
    this.userBarData.splice(0,this.userBarData.length)
    this.userBarData = this.usernumbers
    this.scanBarData.push(0,this.scanBarData.length)
    this.scanBarData = this.noofscans
    // console.log(this.usernumbers,this.noofscans,this.userBarData,this.scanBarData)
    this.showusers =true
    this.showgraph = true
  })
  this.service.getmachinestates(1).subscribe(res=>{
    // console.log(res)
      this.mymachinestatestemp = res;
      this.mymachinestates.splice(0,this.mymachinestates.length);
      
      this.mymachinestates = this.mymachinestatestemp.states ;
       this.previousstates.splice(0,this.previousstates.length);
     this.previousstates = this.mymachinestates;
     // console.log(this.mymachinestates,this.previousstates)
      
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
    
      
      this.mymachinestates = this.mymachinestatestemp.states ;

            
    })
  }



}
