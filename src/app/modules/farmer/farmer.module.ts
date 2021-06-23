import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer.routing-module';
import { FarmerComponent } from "./farmer.component";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FarmerDataComponent } from "./farmer-data/farmer-data.component";
import { ScanDataComponent } from './scan-data/scan-data.component';
import { CheckBoxCompoent } from "./farmer-data/checkbox/checkbox.component";
import { SeeHistoryButtonComponent } from './farmer-data/see-history-button/see-history-button.component';
import { ResultButtonComponent } from "./farmer-data/result-button/result-button.component";

@NgModule({
  declarations: [
    FarmerComponent,
    FarmerDataComponent,
    ScanDataComponent,
    CheckBoxCompoent,
    SeeHistoryButtonComponent,
    ResultButtonComponent,
  ],
  imports: [CommonModule, FarmerRoutingModule, Ng2SmartTableModule],
  providers: [],
  bootstrap: [],
})
export class FarmerModule {}
