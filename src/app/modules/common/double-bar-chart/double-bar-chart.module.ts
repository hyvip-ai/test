import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleBarChartComponent } from "./double-bar-chart.component";
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [DoubleBarChartComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  exports: [DoubleBarChartComponent],
  providers: [],
  bootstrap: [],
})
export class DoubleBarChartModule {}
