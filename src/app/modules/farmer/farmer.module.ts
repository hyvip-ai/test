import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer.routing-module';
import { FarmerComponent } from "./farmer.component";
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FarmerDataComponent } from "./farmer-data/farmer-data.component";
import { ScanDataComponent } from './scan-data/scan-data.component';
import { DataService } from 'src/app/services/data.service';
import { DoughNutChartModule } from "../common/doughnut-chart/doughnut-chart.module";
import { HorizontalBarChartModule } from "../common/horizontal-bar-chart/horizontal-bar-chart.module";
import { BarChartModule } from '../common/bar-chart/bar-chart.module';
import { DoubleBarChartModule } from "../common/double-bar-chart/double-bar-chart.module";


@NgModule({
  declarations: [
    FarmerComponent,
    FarmerDataComponent,
    ScanDataComponent,
    
  ],
  imports: [CommonModule, 
            FarmerRoutingModule,
            Ng2SmartTableModule,
            DoughNutChartModule, 
            HorizontalBarChartModule,
            BarChartModule,
            DoubleBarChartModule,
              NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
            ],
  providers: [DataService],
  bootstrap: [],
})
export class FarmerModule {}
 