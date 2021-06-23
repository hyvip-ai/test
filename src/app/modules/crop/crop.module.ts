import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropComponent } from "./crop.component";
import { CropComponentRoutingModule } from "./crop.routing-module";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MapModule } from '../common/map/map.module';
import { BarChartModule } from "../common/bar-chart/bar-chart.module";
import { HorizontalBarChartModule } from "../common/horizontal-bar-chart/horizontal-bar-chart.module";
import { DoughNutChartModule } from "../common/doughnut-chart/doughnut-chart.module";
import { DoubleBarChartModule } from "../common/double-bar-chart/double-bar-chart.module";

@NgModule({
  declarations: [CropComponent],
  imports: [
    CommonModule,
    CropComponentRoutingModule,
    BsDatepickerModule.forRoot(),
    MapModule,
    BarChartModule,
    HorizontalBarChartModule,
    DoughNutChartModule,
    DoubleBarChartModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CropModule {}
