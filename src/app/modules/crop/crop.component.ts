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
    constructor(private service:DataService,private router:Router){}
     usernumbers = []
  noofscans = []
  usertemp:any = null;
  numbertemp:Number = 0
   statescan:any = 0
     mystates:any = []
  machinedata:any = []
      temp:any= null;
  state:any = false
  showmachine:any = false
  uniquestates:any =[]
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

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
    this.service.getmachinedata().subscribe(res=>{
      console.log(res)

        this.temp = res;
        for(let item of this.temp){
          this.machinedata.push(item.data)
        }
       
        console.log(this.machinedata)
                for(let item of this.machinedata){
          console.log(item.states)

          this.mystates = this.mystates.concat(item.states)
        }
        console.log(this.mystates)
        
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

        for(let i=0;i<this.machinedata.length;i++){
            this.machineData1.splice(i,1,this.machinedata[i].no_of_machines)
            this.scanData.splice(i,1,this.machinedata[i].total_scans)
        }
        console.log(this.machineData1)
        console.log(this.scanData)
        this.showmachine = true
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
    this.scanBarData.splice(0,this.scanBarData.length)
    this.scanBarData = this.noofscans
    console.log(this.usernumbers,this.noofscans,this.userBarData,this.scanBarData)
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

  selectMachine(index) {
    this.selectMachineIndex = index;
  }

  selectUser(index) {
    this.selectUserIndex = index;
  }
}

