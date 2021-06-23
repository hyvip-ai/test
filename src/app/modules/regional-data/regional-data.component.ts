import { Component, HostListener, OnInit } from '@angular/core';
import { constants } from "../../global/constants";

@Component({
  selector: 'app-regional-data',
  templateUrl: './regional-data.component.html',
  styleUrls: ['./regional-data.component.scss'],
})
export class RegionalDataComponent implements OnInit {
  username = 'Pranav';

  crops = constants.crops;
  machineType = constants.machineType;

  indiaStates = constants.indiaState;
  userType = constants.userType

  data = [72, 72, 72, 72, 72];
  labels = ['Punjab', 'Bihar', 'Uttar Pradesh', 'Maharashtra', 'Gujarat'];

  cropData = [267, 190, 200, 210, 225, 145, 180, 140];
  cropLabels = ['Rice', 'Wheat', 'Barley', 'Maize', 'Millet', 'Jowar'];

  machineData = [320, 332, 301, 334];
  scanData = [220, 182, 191, 234];
  labels1 = ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'];
  legend1 = ['Number of machine', 'Number of scans'];

  userData = [320, 332, 301, 334, 290];
  scanData1 = [220, 182, 191, 234, 250];
  labels2 = ['Farmer', 'Broker', 'Trader', 'Inspector', 'Technician'];
  legend2 = ['Number of users', 'Number of scans'];

  innerWidth;
  sizeOfMap;
  topPercent;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.setMapOptions();
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
  constructor() {}
}
