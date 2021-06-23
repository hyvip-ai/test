import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  templateUrl: './checkbox.component.html',
})
export class CheckBoxCompoent implements ViewCell, OnInit {
  farmerName: String

  @Input() value: string ;
  @Input() rowData: any;

  ngOnInit() {
    this.farmerName = this.value;
  }
}