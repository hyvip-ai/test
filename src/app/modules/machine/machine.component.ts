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
 showindiamap:boolean = false
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

    this.selectUserIndex = index;
  
    doughnuttemp.push(this.myusers[index].good_percentage)
   doughnuttemp.push(this.myusers[index].bad_percentage)
   doughnuttemp.push(this.myusers[index].average_percentage)
    this.doughnutChartData.splice(0,this.doughnutChartData.length)
    this.doughnutChartData = doughnuttemp
  
    
  }

  innerWidth;
  samllerScreenUI = false;
  sizeOfMap;
  leftPercent; 
  topPercent:string = "20px";
  usernumbers = []
  noofscans = []
  usertemp:any = null;
  numbertemp:number = 0
   cropScanData = [];
  cropScanLabels = [];
  cropArray = []
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

  scansByMonthData:any = [
  ];
  selectionarray:any = []
  showyeargraph:boolean = false
  myyeardata:any = {}
    mymachinestates:any = []
   previousstates:any = []
    mymachinedistricts:any = []
    mymachinedistrictnumbers:any = []
  ngOnInit(): void {
      if(!localStorage.getItem('loggedin')){
      localStorage.setItem('loginmessege','Log In to Access The Page')
      this.router.navigate(['/signin'])
    }
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1302) {
      this.samllerScreenUI = true;
    }
    this.setMapOptions(); 
    this.service.getyeardata().subscribe(res=>{
        console.log(res)
       
       this.myyeardata = res
       for(let key in this.myyeardata){
          this.selectionarray.push(key)

       }
       for(let key in this.myyeardata){
          if(key == this.selectionarray[0]){
            this.scansByMonthData = this.myyeardata[key];
          }
       }
       this.showyeargraph = true
     
    })
    this.service.getcrops().subscribe(res=>{
      console.log(res)
      let temp = res;
      this.cropArray = temp
      let graphdata = []
      for(let croptemp of temp){

        croptemp.good_percentage = (Math.floor(((croptemp.good_scans/croptemp.total_scans)*100)*10))/10
      croptemp.average_percentage = (Math.floor(((croptemp.average_scans/croptemp.total_scans)*100)*10))/10
      croptemp.bad_percentage =Math.floor(Math.round((100 - (croptemp.good_percentage + croptemp.average_percentage))*10))/10
      
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
    
      var districtobject = this.machineCardData[0].districts
      for(let key in districtobject){
        this.mymachinedistricts.push(key)
        this.mymachinedistrictnumbers.push(districtobject[key])
      }
      console.log(this.mymachinedistricts,this.mymachinedistrictnumbers)
      this.showindiamap = true;
    for(let item of this.machineCardData){

        item.good_percentage =(Math.floor(((item.good_scans/item.total_scans)*100)*10))/10
        item.average_percentage = (Math.floor(((item.average_scans/item.total_scans)*100)*10))/10
        item.bad_percentage =Math.floor(Math.round((100 - (item.good_percentage + item.average_percentage))*10))/10
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
    this.usertemp = res;
    this.usernumbers.push(this.usertemp.length);
    for(let item of this.usertemp){
      this.numbertemp = this.numbertemp + item.no_of_scans 
      this.badtemp = this.badtemp + item.bad_scans
      this.averagetemp = this.averagetemp + item.average_scans
      this.goodtemp = this.goodtemp + item.good_scans
    }
   this.noofscans.push(this.numbertemp)
    userersobject.good_percentage  = (Math.floor(((this.goodtemp/this.numbertemp)*100)*10))/10
    userersobject.average_percentage  = (Math.floor(((this.averagetemp/this.numbertemp)*100)*10))/10
    userersobject.bad_percentage  = Math.floor(Math.round((100 - (userersobject.good_percentage + userersobject.average_percentage))*10))/10
    userersobject.total = this.numbertemp
   userersobject.user = 'Farmer'
   this.doughnutChartData.splice(0,this.doughnutChartData.length)
   this.doughnutChartData.push(userersobject.good_percentage)
   this.doughnutChartData.push(userersobject.bad_percentage)
   this.doughnutChartData.push(userersobject.average_percentage)
    this.myusers.push(userersobject)
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
     userersobject.good_percentage  = (Math.floor(((this.goodtemp/this.numbertemp)*100)*10))/10
    userersobject.average_percentage  = (Math.floor(((this.averagetemp/this.numbertemp)*100)*10))/10
     userersobject.bad_percentage  = Math.floor(Math.round((100 - (userersobject.good_percentage + userersobject.average_percentage))*10))/10
    userersobject.total = this.numbertemp
    userersobject.user = 'Trader'
    this.myusers.push(userersobject)

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

      userersobject.good_percentage  = (Math.floor(((this.goodtemp/this.numbertemp)*100)*10))/10
    userersobject.average_percentage  = (Math.floor(((this.averagetemp/this.numbertemp)*100)*10))/10
     userersobject.bad_percentage  = Math.floor(Math.round((100 - (userersobject.good_percentage + userersobject.average_percentage))*10))/10
    userersobject.total = this.numbertemp

    userersobject.user = 'Inspector'
    this.myusers.push(userersobject)
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
        userersobject.good_percentage  = (Math.floor(((this.goodtemp/this.numbertemp)*100)*10))/10
    userersobject.average_percentage  =(Math.floor(((this.averagetemp/this.numbertemp)*100)*10))/10
 userersobject.bad_percentage  = Math.floor(Math.round((100 - (userersobject.good_percentage + userersobject.average_percentage))*10))/10
    userersobject.total = this.numbertemp

    userersobject.user = 'Technician'
 
    this.myusers.push(userersobject)
 
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
          userersobject.good_percentage  = (Math.floor(((this.goodtemp/this.numbertemp)*100)*10))/10
    userersobject.average_percentage  = (Math.floor(((this.averagetemp/this.numbertemp)*100)*10))/10
 userersobject.bad_percentage  = Math.floor(Math.round((100 - (userersobject.good_percentage + userersobject.average_percentage))*10))/10
    userersobject.total = this.numbertemp

    userersobject.user = 'Broker'
    this.myusers.push(userersobject)
   
    this.userBarData.splice(0,this.userBarData.length)
    this.userBarData = this.usernumbers
    this.scanBarData.push(0,this.scanBarData.length)
    this.scanBarData = this.noofscans
    this.showusers =true
    this.showgraph = true
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


  mymachinestatestemp:any = null

  
  changeMachine(i:any) {
// this.showindiamap  = false;
    this.selectedMachineIndex = i;
     this.previousstates = this.mymachinestates;
    this.service.getmachinestates(i+1).subscribe(res=>{
      this.mymachinestatestemp = res;
      this.mymachinestates = this.mymachinestatestemp.states ;
      var districttemp = this.mymachinestatestemp.districts;
      console.log(districttemp)
      this.mymachinedistricts.splice(0,this.mymachinedistricts.length)
      this.mymachinedistrictnumbers.splice(0,this.mymachinedistrictnumbers.length)
      for(let item in districttemp){
        this.mymachinedistricts.push(item);
        this.mymachinedistrictnumbers.push(districttemp[item])
      }
      console.log(this.mymachinedistricts)
    })
  }
  yearvalue:any = null
selectyear(){
  this.yearvalue  = document.getElementById('year')!
   for(let key in this.myyeardata){
          if(key == this.yearvalue.value){
            this.scansByMonthData = this.myyeardata[key];
          }
       }
}


}
