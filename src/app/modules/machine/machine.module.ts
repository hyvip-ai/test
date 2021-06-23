import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from '../common/map/map.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { MachineComponent } from "./machine.component";
import { MachineRoutingModule } from "./machine.routing-module";
import { DoughNutChartModule } from "../common/doughnut-chart/doughnut-chart.module";
import { HorizontalBarChartModule } from "../common/horizontal-bar-chart/horizontal-bar-chart.module";
import { BarChartModule } from '../common/bar-chart/bar-chart.module';
import { DoubleBarChartModule } from "../common/double-bar-chart/double-bar-chart.module";
import { MachineBarChartComponent } from "./machine-bar-chart/machine-bar-chart.component";

@NgModule({
  declarations: [MachineComponent, MachineBarChartComponent],
  imports: [
    CommonModule,
    MapModule,
    DoughNutChartModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    MachineRoutingModule,
    HorizontalBarChartModule,
    BarChartModule,
    DoubleBarChartModule,
  ],
  providers: [],
  bootstrap: [],
})
export class MachineModule {}
