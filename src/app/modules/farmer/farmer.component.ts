import { Component, OnInit } from '@angular/core';
import 'jquery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent implements OnInit{
  constructor(private service:DataService){}
  ngOnInit(){
  

   
  }
}
