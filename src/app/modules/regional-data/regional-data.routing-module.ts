import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionalDataComponent } from "./regional-data.component";

const routes: Routes = [{ path: '', component: RegionalDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionalDataComponentRoutingModule {}
