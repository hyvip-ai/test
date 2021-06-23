import { Component, HostListener, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
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

  machine1 = '39%';
  machine2 = '39%';
  machine3 = '29%';
  machine4 = '29%';

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
  doughnutChartData = [40, 39, 12, 9];
  doughnutChartLabels = ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'];

  data = [219, 140, 233, 146, 112];
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
