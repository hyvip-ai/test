import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashBoardComponent implements OnInit {
  innerWidth;
  samllerScreenUI = false;
  sizeOfMap;
  leftPercent;
  topPercent = '20px';
  temp:any = null
  userdata:any = null
  machinedata:any = []
  totalscans:number = 0
  machine1scan:number = 0
  machine2scan:number = 0
  machine3scan:number = 0
  machine4scan:number = 0
  machine1:number= 0
  machine2:number = 0
  machine3:number = 0
  machine4:number = 0
  mystate:any = [] 
  machine1scans:number = 0
  machine2scans:number = 0
  machine3scans:number = 0
  machine4scans:number = 0

  donutcharttemp:any=[]
  constructor(private service:DataService,private router:Router){}
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();

    this.service.getfarmers().subscribe(res=>{
      
      this.temp = res
      // console.log(this.temp)
     this.data.splice(0,1,this.temp.length)
      // console.log(this.data)
    })
     this.service.getbrokers().subscribe(res=>{
        this.temp = res
      // console.log(this.temp)
      this.data.splice(1,1,this.temp.length)
      // console.log(this.data)
    })
    this.service.gettraders().subscribe(res=>{
       this.temp = res
      // console.log(this.temp)
      this.data.splice(2,1,this.temp.length)
      // console.log(this.data)
    })
   
    this.service.gettechinician().subscribe(res=>{
      this.temp = res
      // console.log(this.temp)
      this.data.splice(3,1,this.temp.length)
      // console.log(this.data)
    })
    this.service.getpolice().subscribe(res=>{
       this.temp = res
      // console.log(this.temp)
      this.data.splice(4,1,this.temp.length)
      // console.log(this.data)
      this.userdata = this.data
      console.log(this.userdata)
    })



     this.service.getmachinedata().subscribe(res=>{
        console.log(res)

        this.temp = res;
        for(let item of this.temp){
          this.machinedata.push(item.data)
        }
       
        // console.log(this.machinedata)
        var i = 0
        for(let item of this.machinedata){
          // console.log(item)
          this.totalscans = this.totalscans + item.total_scans

        }
        console.log(this.totalscans)
        for(let i=0;i<this.machinedata.length;i++){
          if(i==0){
            // console.log(this.machinedata[i].total_scans)
            this.machine1scan = Math.floor((this.machinedata[i].total_scans/this.totalscans)*100)
            this.donutcharttemp.push(this.machine1scan)
            this.machine1 = this.machinedata[i].no_of_machines
            this.machine1scan = this.machinedata[i].total_scans
          }
          else if(i==1){
            // console.log(this.machinedata[i].total_scans)
            this.machine2scan = Math.floor((this.machinedata[i].total_scans/this.totalscans)*100)
            this.donutcharttemp.push(this.machine2scan)
            this.machine2 = this.machinedata[i].no_of_machines
            this.machine2scan = this.machinedata[i].total_scans


          }
          else if(i==2){
            // console.log(this.machinedata[i].total_scans)
            this.machine3scan = Math.floor((this.machinedata[i].total_scans/this.totalscans)*100)
            this.donutcharttemp.push(this.machine3scan)
            this.machine3 = this.machinedata[i].no_of_machines
            this.machine3scan = this.machinedata[i].total_scans


          }else{
            // console.log(this.machinedata[i].total_scans)
            this.machine4scan = Math.floor((this.machinedata[i].total_scans/this.totalscans)*100)
            this.donutcharttemp.push(this.machine4scan)
            // console.log(this.machine4scan)
            this.machine4 = this.machinedata[i].no_of_machines
            this.machine4scan = this.machinedata[i].total_scans


          }
        }

        this.doughnutChartData = this.donutcharttemp

        console.log(this.doughnutChartData)
        console.log(this.machine1scan,this.machine2scan,this.machine3scan,this.machine4scan)
      })
  } 

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
  }

  username = 'Pranav';

  membersOnboarded = [
    {
      name: 'farmers',
      value: 291,
    },
    {
      name: 'Brokers',
      value: 140,
    },
    {
      name: 'traders',
      value: 233,
    },
    {
      name: 'Inspectors',
      value: 146,
    },
    {
      name: 'technician',
      value: 112,
    },
  ];

  // machine1 = '39%';
  // machine2 = '39%';
  // machine3 = '29%';
  // machine4 = '29%';

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

  doughnutColors = [
    'rgb(97,97,97)',
    'rgb(183,182,182)',
    'rgb(255,213,103)',
    'rgb(169,84,49)',
    'rgb(248,180,0)',
  ];
  doughnutChartData:any = null;
  doughnutChartLabels = ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'];

  data = [];
  labels = ['Farmer', 'Broker', 'Trader', 'Inspector', 'Technician'];
  color = [
    'rgb(215,223,35)',
    'rgb(112,212,224)',
    'rgb(97,97,97)',
    'rgb(215,223,35)',
    'rgb(112,212,224)',
  ];

  setMapOptions(){
    if (this.innerWidth <= 1302) {
     this.samllerScreenUI = true;
    }
    else {
    this.samllerScreenUI = false;
    }
    this.sizeOfMap = this.innerWidth / 2 - 70;

    console.log(this.sizeOfMap, this.innerWidth);
    
    if(this.sizeOfMap < 300){
      this.sizeOfMap = 400
    }
    
    if (this.innerWidth < 334) {
      this.sizeOfMap = 300;
    } else if (this.innerWidth < 379) {
      this.sizeOfMap = 300;
    } else if (this.innerWidth < 460) {
      this.sizeOfMap = 350;
    } else if (this.innerWidth < 509) {
      this.sizeOfMap = 400;
    } else if (this.innerWidth < 1038) {
      this.sizeOfMap = 450;
    } else if (this.innerWidth < 1236) {
      this.sizeOfMap = 500;
    } else if (this.innerWidth < 1302) {
      this.sizeOfMap = 550;
    } else if (this.innerWidth > 1510) {
      this.sizeOfMap = 685;
    }

    if (336 > this.innerWidth) {
      this.leftPercent = '20px';
      this.topPercent = '140px';
    } else if (379 > this.innerWidth) {
      this.leftPercent = '20px';
      this.topPercent = '80px';
    } else if (462 >= this.innerWidth) {
      this.leftPercent = '20px';
      this.topPercent = '60px';
    } else if (613 >= this.innerWidth) {
      this.topPercent = '40px';
      this.leftPercent = '20px';
    } else if (698 >= this.innerWidth) {
      this.topPercent = '20px';
      this.leftPercent = '20px';
    } else if (960 >= this.innerWidth) {
      this.topPercent = '40px';
      this.leftPercent = '40px';
    } else if (1235 >= this.innerWidth) {
      this.topPercent = '120px';
      this.leftPercent = '20px';
    } else if (1302 >= this.innerWidth) {
      this.topPercent = '120px';
      this.leftPercent = '20px';
    }
  }


}
