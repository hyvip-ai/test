import { Component, HostListener, OnInit } from '@angular/core';
import { constants } from '../../global/constants';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.scss'],
})
export class CropComponent implements OnInit {
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

  userData = [320, 332, 301, 334, 290];
  scanData1 = [220, 182, 191, 234, 250];
  labels2 = ['Farmer', 'Broker', 'Trader', 'Inspector', 'Technician'];
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

