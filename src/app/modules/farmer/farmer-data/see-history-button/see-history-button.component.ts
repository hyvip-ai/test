import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';

@Component({
  templateUrl: './see-history-button.component.html',
  styleUrls: ['./see-history-button.component.scss']
})
export class SeeHistoryButtonComponent implements ViewCell, OnInit {
  farmerName: String;

  @Input() value: string;
  @Input() rowData: any;

  constructor(private router: Router){}

  ngOnInit() {
    this.farmerName = this.rowData['name'];      
  }

  redirectToFarmerDataPage(){
    this.router.navigate(['/farmer/' + this.farmerName]);
  }
}
