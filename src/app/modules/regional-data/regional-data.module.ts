import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RegionalDataComponent } from "./regional-data.component";
import { RegionalDataComponentRoutingModule } from "./regional-data.routing-module";
import { HorizontalBarChartModule } from '../common/horizontal-bar-chart/horizontal-bar-chart.module';
import { MapModule } from "../common/map/map.module";
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from "../common/line-chart/line-chart.component";
import { BarChartModule } from '../common/bar-chart/bar-chart.module';
import { DoughNutChartModule } from "../common/doughnut-chart/doughnut-chart.module";
import { DoubleBarChartModule } from "../common/double-bar-chart/double-bar-chart.module";

@NgModule({
  declarations: [RegionalDataComponent, LineChartComponent],
  imports: [
    CommonModule,
    RegionalDataComponentRoutingModule,
    BsDatepickerModule.forRoot(),
    MapModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    HorizontalBarChartModule,
    BarChartModule,
    DoughNutChartModule,
    DoubleBarChartModule,
  ],
  providers: [],
  bootstrap: [],
})
export class RegionalDataModule {}
