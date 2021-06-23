import { AfterViewInit, Component , Input, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-home-bar-chart',
  template: `
    <div class="header">
      <h2 class="h4">{{ text }}</h2>
    </div>
    <div
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
  styleUrls: ['./bar-chart.component.scss'],
})
export class HomeBarChartComponent implements AfterViewInit {
  @Input() data: number[];
  @Input() maxValue: number;
  @Input() labels: string[];
  @Input() text: string;
  @Input() barColor: string;
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
          data: [
            {
              value: this.data[0],
              itemStyle: { color: this.barColor[0] },
            },
            {
              value: this.data[1],
              itemStyle: { color: this.barColor[1] },
            },
            {
              value: this.data[2],
              itemStyle: { color: this.barColor[2] },
            },
            {
              value: this.data[3],
              itemStyle: { color: this.barColor[3] },
            },
            {
              value: this.data[4],
              itemStyle: { color: this.barColor[4] },
            },
          ],
          type: 'bar',
          barWidth: '15%',
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
      xAxis: {
        type: 'category',
        data: this.labels,
        axisLabel: {
          color: 'black',
          fontSize: 11,
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
      grid: {
        show: false,
      },
      series: [
        {
          data: [
            {
              value: this.data[0],
              itemStyle: { color: this.barColor[0] },
            },
            {
              value: this.data[1],
              itemStyle: { color: this.barColor[1] },
            },
            {
              value: this.data[2],
              itemStyle: { color: this.barColor[2] },
            },
            {
              value: this.data[3],
              itemStyle: { color: this.barColor[3] },
            },
            {
              value: this.data[4],
              itemStyle: { color: this.barColor[4] },
            },
          ],
          type: 'bar',
          barWidth: '18%',
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