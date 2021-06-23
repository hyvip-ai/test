import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentHeaderComponent } from "./component-header.component";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [ComponentHeaderComponent],
  imports: [
    CommonModule,
    BsDatepickerModule
  ],
  exports: [ComponentHeaderComponent],
  providers: [],
  bootstrap: [],
})
export class ComponentHeaderModule {}
