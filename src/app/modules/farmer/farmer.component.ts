import { Component, OnInit } from '@angular/core';
import 'jquery';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent implements OnInit{
  
  ngOnInit(){
    $('app-farmer')[0].style.overflow = "scroll";
    $('app-farmer')[0].style.display = 'table-row';
  }

  checkbocClicked(event){
    if(event.target['checked']){
      $('input#checkbox').prop('checked', true);
    }else{
      $('input#checkbox').prop('checked', false);
    }
  }
}
