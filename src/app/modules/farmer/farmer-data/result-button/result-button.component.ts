import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';

@Component({
  templateUrl: './result-button.component.html',
  styleUrls: ['./result-button.component.scss'],
})
export class ResultButtonComponent implements ViewCell, OnInit {
  farmerName: String;

  @Input() value: string;
  @Input() rowData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.farmerName = this.rowData['name'];
  }

  redirectToScanDataPage() {
    this.router.navigate(['/farmer/' + this.farmerName +'/scan-data']);
  }
}
