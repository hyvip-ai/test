import { Component, HostListener, OnInit } from '@angular/core';
import { constants } from '../../global/constants';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.scss'],
})
export class CropComponent implements OnInit {
  showmachine:any = false
  graphshow:any = false
  selectedcropmonthdata:any = []
  selectedcropmachinedata:any = [] 
  selectedcroppreviousstate:any = []
  selecetedmachine:any = false
  selectedcropuserdata:any = []
  selectedcropuserlabel:any = []
  selecteduserdata:any=false
  monthdata:any = false
  cropArray:any = []
  showusers:any = false
  uniquedistricts:any = []
    constructor(private service:DataService,private router:Router){}
    badtemp:any = 0
  averagetemp:any = 0
  goodtemp:any = 0
     usernumbers = []
  noofscans = [] 
  usertemp:any = null;
  numbertemp:number = 0
   statescan:any = 0
     mystates:any = []
  machinedata:any = []
      temp:any= null;
  state:any = false
  uniquestates:any =[]
  cropData:any = false

  machineData = [
    {
      machine: 'Machine 1',
      scans: '123',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      machine: 'Machine 2',
      scans: '45',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      machine: 'Machine 3',
      scans: '323',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      machine: 'Machine 4',
      scans: '232',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
  ];

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

  cropScanData = [60, 65, 40, 80];
  cropScanLabels = ['Machine 4', 'Machine 3', 'Machine 2', 'Machine 1'];
  crops = constants.crops;

  indiaStates = constants.indiaState;
  myusers:any=[]
  doughnutChartData = [32, 32, 36];
  doughnutChartLabels = ['Good', 'Bad', 'Average'];

  machineData1 = [320, 332, 301, 334];
  scanData = [220, 182, 191, 234];
  labels1 = ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'];
  legend1 = ['Number of machine', 'Number of scans'];

 userBarData = [320, 332, 301,200,300];
  scanBarData = [220, 182, 191,150,289];
  labels2 = ['Farmer', 'Trader','Inspector','Technician','Broker'];
  legend2 = ['Number of users', 'Number of scans'];

  userTableData = [
    {
      crop: 'Farmer',
      scans: '123',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Broker',
      scans: '45',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Trader',
      scans: '323',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Inspector',
      scans: '232',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
    {
      crop: 'Technician',
      scans: '415',
      good: '89%',
      average: '09%',
      bad: '02%',
    },
  ];

  innerWidth;
  sizeOfMap;
  topPercent;
  selectUserIndex = 0;
  selectMachineIndex = 0;
  uniquenumbers:any = [];

  ngOnInit(): void {
      if(!localStorage.getItem('loggedin')){
      localStorage.setItem('loginmessege','Log In to Access The Page')
      this.router.navigate(['/signin'])
    }
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
  this.service.getcrops().subscribe(res=>{ 
    this.cropArray = res;
    for(let croptemp of this.cropArray){
                croptemp.good_percentage = (Math.floor(((croptemp.good_scans/croptemp.total_scans)*100)*10))/10
      croptemp.average_percentage = (Math.floor(((croptemp.average_scans/croptemp.total_scans)*100)*10))/10
      croptemp.bad_percentage = Math.floor(Math.round((100 - (croptemp.good_percentage + croptemp.average_percentage))*10))/10
    }
    this.cropData = true
       this.selectedcropmonthdata = this.cropArray[0].months

        console.log(this.cropArray)
        var disttemp = this.cropArray[0].districts
        console.log(disttemp) 
      for(let key in disttemp){
        console.log(key)
        this.uniquedistricts.push(key);
        this.uniquenumbers.push(disttemp[key]);
      }
      this.monthdata = true
      this.state = true
      let userlabeltemp=[]
      let userdatatemp = []
      let machinedatatemp = []
      userlabeltemp.push('Farmer')
      userdatatemp.push(this.cropArray[0].farmer)
      userlabeltemp.push('Broker')
      userdatatemp.push(this.cropArray[0].broker)
      userlabeltemp.push('Technician')
      userdatatemp.push(this.cropArray[0].technician)
      userlabeltemp.push('Inspector')
      userdatatemp.push(this.cropArray[0].inspector)
      userlabeltemp.push('Trader')
      userdatatemp.push(this.cropArray[0].trader)
      machinedatatemp.push(this.cropArray[0].machine1)
      machinedatatemp.push(this.cropArray[0].machine2)
      machinedatatemp.push(this.cropArray[0].machine3)
      machinedatatemp.push(this.cropArray[0].machine4)
        this.selectedcropuserdata=userdatatemp
        this.selectedcropuserlabel=userlabeltemp
        this.selecteduserdata=true
        this.selectedcropmachinedata = machinedatatemp
        this.selecetedmachine = true

  })
    this.service.getmachinedata().subscribe(res=>{
      
        this.machinedata = res;
       for(let item of this.machinedata){

        item.good_percentage = (Math.floor(((item.good_scans/item.total_scans)*100)*10))/10
        item.average_percentage = (Math.floor(((item.average_scans/item.total_scans)*100)*10))/10
        item.bad_percentage = Math.floor(Math.round((100 - (item.good_percentage + item.average_percentage))*10))/10
       }
       let machinetempbardata=[]
       machinetempbardata.push(this.machinedata[0].good_percentage)
       machinetempbardata.push(this.machinedata[0].bad_percentage)
       machinetempbardata.push(this.machinedata[0].average_percentage)
       this.machinechartdata = machinetempbardata
     
        this.showmachine = true
        for(let i=0;i<this.machinedata.length;i++){
            this.machineData1.splice(i,1,this.machinedata[i].no_of_machines)
            this.scanData.splice(i,1,this.machinedata[i].total_scans)
        }
   
        this.showmachine = true
    })
    this.service.getfarmers().subscribe(res=>{
      let userbartempdata=[]
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
  
     userbartempdata.push(userersobject.good_percentage)
     userbartempdata.push(userersobject.bad_percentage)
     userbartempdata.push(userersobject.average_percentage)
     this.userchartdata = userbartempdata
     this.graphshow = true
  
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
    userersobject.average_percentage  = (Math.floor(((this.badtemp/this.numbertemp)*100)*10))/10
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
       userersobject.good_percentage  =  (Math.floor(((this.goodtemp/this.numbertemp)*100)*10))/10
    userersobject.average_percentage  =  (Math.floor(((this.averagetemp/this.numbertemp)*100)*10))/10
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
             userersobject.good_percentage  =    (Math.floor(((this.goodtemp/this.numbertemp)*100)*10))/10
    userersobject.average_percentage  =   (Math.floor(((this.averagetemp/this.numbertemp)*100)*10))/10
userersobject.bad_percentage  = Math.floor(Math.round((100 - (userersobject.good_percentage + userersobject.average_percentage))*10))/10
    userersobject.total = this.numbertemp

    userersobject.user = 'Broker'
    this.myusers.push(userersobject)
    console.log(this.myusers)
    this.userBarData.splice(0,this.userBarData.length)
    this.userBarData = this.usernumbers
    this.scanBarData.splice(0,this.scanBarData.length)
    this.scanBarData = this.noofscans
     this.showusers =true
  })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
  }

  setMapOptions() {
    this.sizeOfMap = '700px';
    this.topPercent = '20px';
    if (this.innerWidth < 437) {
      this.sizeOfMap = '300px';
      this.topPercent = '80px';
    } else if (this.innerWidth < 527) {
      this.sizeOfMap = '350px';
      this.topPercent = '60px';
    } else if (this.innerWidth < 615) {
      this.sizeOfMap = '450px';
      this.topPercent = '40px';
    } else if (this.innerWidth < 703) {
      this.sizeOfMap = '550px';
    } else if (this.innerWidth < 748) {
      this.sizeOfMap = '650px';
    } else if (this.innerWidth < 930) {
    }
  }
machinechartdata=[]
  selectMachine(index:any) {
    this.selectMachineIndex = index;
    let machinetempbardata=[]
       machinetempbardata.push(this.machinedata[index].good_percentage)
       machinetempbardata.push(this.machinedata[index].bad_percentage)
       machinetempbardata.push(this.machinedata[index].average_percentage)
       this.machinechartdata = machinetempbardata
  }
  userchartdata=[]
  selectUser(index) {
    let userbartempdata = []
    this.selectUserIndex = index;
       userbartempdata.push(this.myusers[index].good_percentage)
     userbartempdata.push(this.myusers[index].bad_percentage)
     userbartempdata.push(this.myusers[index].average_percentage)
     this.userchartdata = userbartempdata
  }
crop:any = null
  cropselected(){ 
    this.crop = document.getElementById('crop')
    console.log(this.crop.value)
    this.service.getselectedcrop(this.crop.value).subscribe(res=>{
       let croptemp = res
       console.log(croptemp)
      croptemp.good_percentage = (Math.floor(((croptemp.good_scans/croptemp.total_scans)*100)*10))/10
      croptemp.average_percentage = (Math.floor(((croptemp.average_scans/croptemp.total_scans)*100)*10))/10
      croptemp.bad_percentage = Math.floor(Math.round((100 - (croptemp.good_percentage + croptemp.average_percentage))*10))/10
      this.selectedcropmonthdata = croptemp.months

//       this.uniquestates = croptemp.states
      this.uniquedistricts.splice(0,this.uniquedistricts.length)
      this.uniquenumbers.splice(0,this.uniquenumbers.length)
      var tempstate = []
      var tempnum = []
      for(let key in croptemp.districts){
        this.tempstate.push(key)
        this.tempnum.push(croptemp.districts[key])
      }
       this.uniquedistricts = tempstate
        this.uniquenumbers = tempnum 
//        this.selectedcroppreviousstate.splice(0,this.selectedcroppreviousstate.length)
      
//      this.selectedcroppreviousstate = this.previousstaetemp
//      console.log(this.selectedcroppreviousstate)
//      this.previousstaetemp = this.uniquestates
      this.monthdata = true
      this.state = true
      let userlabeltemp=[]
      let userdatatemp = []
      let machinedatatemp = []
      userlabeltemp.push('Farmer')
      userdatatemp.push(croptemp.farmer)
      userlabeltemp.push('Broker')
      userdatatemp.push(croptemp.broker)
      userlabeltemp.push('Technician')
      userdatatemp.push(croptemp.technician)
      userlabeltemp.push('Inspector')
      userdatatemp.push(croptemp.inspector)
      userlabeltemp.push('Trader')
      userdatatemp.push(croptemp.trader)
      machinedatatemp.push(croptemp.machine1)
      machinedatatemp.push(croptemp.machine2)
      machinedatatemp.push(croptemp.machine3)
      machinedatatemp.push(croptemp.machine4)
        this.selectedcropuserdata=userdatatemp
        this.selectedcropuserlabel=userlabeltemp
        this.selecteduserdata=true
        this.selectedcropmachinedata = machinedatatemp
        this.selecetedmachine = true
    })
  
  }
  previousstaetemp:any = []
}

