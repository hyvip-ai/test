import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughNutChartComponent } from './doughnut-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [DoughNutChartComponent],
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
  exports: [DoughNutChartComponent],
  providers: [],
  bootstrap: [],
})
export class DoughNutChartModule {}
