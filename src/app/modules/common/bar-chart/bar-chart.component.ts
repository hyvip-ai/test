import { AfterViewInit, Component , Input, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-bar-chart',
  template: `
    <div
      style="height: {{ size  ? size: ''}};"
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements AfterViewInit {
  @Input() data: number[];
  @Input() labels: string[];
  @Input() barColor: string;
  @Input() size;

  option: any = {};
  echartsInstance;

  ngOnChanges(changes: SimpleChanges) {
    this.option = {
      xAxis: {
        type: 'category',
        data: this.labels,
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#e0e0e0',
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        show: true,
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#e0e0e0',
            width: '2',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'transparent',
            width: '1',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'black',
          },
        },
      },
      series: [
        {
          data: this.data,
          type: 'bar',
          color: this.barColor,
          barWidth: '25%',
          label: {
            show: true,
            position: 'top',
            valueAnimation: true,
          },
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    this.option = {
      legend: {
        show: true,
        right: 'top',
      },
      xAxis: {
        type: 'category',
        data: this.labels,
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#e0e0e0',
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        show: true,
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#e0e0e0',
            width: '2',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'transparent',
            width: '1',
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: 'black',
          },
        },
      },
      series: [
        {
          name: 'No of scan',
          data: this.data,
          type: 'bar',
          color: this.barColor,
          barWidth: '25%',
          label: {
            show: true,
            position: 'top',
            valueAnimation: true,
          },
        },
      ],
    };
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }
}