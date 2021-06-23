import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashboard.component';
import { DashBoardComponentRoutingModule } from "./dashboard.routing-module";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MapModule } from "../common/map/map.module";
import { DashboardDoughNutChartComponent } from './doughnut-chart/dashboard-doughnut-chart.component';
import { HomeBarChartComponent } from "./bar-chart/bar-chart.component"
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    DashBoardComponent,
    HomeBarChartComponent,
    DashboardDoughNutChartComponent,
  ],
  imports: [
    CommonModule,
    DashBoardComponentRoutingModule,
    BsDatepickerModule.forRoot(),
    MapModule,
    NgxEchartsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class DashBoardModule {}
