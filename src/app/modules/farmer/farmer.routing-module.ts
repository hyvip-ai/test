import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmerComponent } from "./farmer.component";
import { FarmerDataComponent } from "./farmer-data/farmer-data.component";
import { ScanDataComponent } from "./scan-data/scan-data.component";

const routes: Routes = [
  {
    path: '',
    component: FarmerComponent,
    children: [
      {
        path: '',
        component: FarmerDataComponent,
      },
      {
        path: ':farmer_name',
        component: FarmerDataComponent,
      },
      {
        path: ':farmer_name/scan-data',
        component: ScanDataComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerRoutingModule {}
