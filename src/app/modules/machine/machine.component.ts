import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-data',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent implements OnInit{
  constructor() {}

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

  userBarData = [320, 332, 301, 334, 290];
  scanBarData = [220, 182, 191, 234, 250];
  labels2 = ['Farmer', 'Broker', 'Trader', 'Inspector', 'Technician'];
  legend2 = ['Number of users', 'Number of scans'];

  selectedCropIndex = 0;
  selectUserIndex = 0;

  changeMachine(index) {
    this.selectedMachineIndex = index;
  }

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

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1302) {
      this.samllerScreenUI = true;
    }
    this.setMapOptions();
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
}
