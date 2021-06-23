import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-double-bar-chart',
  template: `
    <div class="header">
      <h2 class="h4"></h2>
    </div>
    <div
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
  styleUrls: ['./double-bar-chart.scss'],
})
export class DoubleBarChartComponent implements AfterViewInit {
  @Input() machineData: number[];
  @Input() scanData: number[];
  @Input() labels: string[];
  @Input() legend: string[];

  option: any = {};
  echartsInstance;

  ngOnChanges(changes: SimpleChanges) {
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        right: 'top',
        orient: 'vertical',
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: this.labels,
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false,
          },
        },
      ],
      grid: {
        top: '25%',
      },
      series: [
        {
          name: this.legend[0],
          type: 'bar',
          barGap: 0,
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            color: 'rgb(225,231,91)',
          },
          barWidth: '30%',
          data: this.machineData,
          label: {
            show: true,
            position: 'top',
            valueAnimation: true,
          },
        },
        {
          name: this.legend[1],
          type: 'bar',
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            color: 'rgb(112,212,224)',
          },
          barWidth: '20%',
          data: this.scanData,
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        right: 'top',
        orient: 'vertical',
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: this.labels,
          labels: {
            color: 'black',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false,
          },
        },
      ],
      grid: {
        top: '25%',
      },
      series: [
        {
          name: this.legend[0],
          type: 'bar',
          barGap: 0,
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            color: 'rgb(225,231,91)',
          },
          barWidth: '20%',
          data: this.machineData,
          label: {
            show: true,
            position: 'top',
            valueAnimation: true,
          },
        },
        {
          name: this.legend[1],
          type: 'bar',
          emphasis: {
            focus: 'series',
          },
          itemStyle: {
            color: 'rgb(112,212,224)',
          },
          barWidth: '20%',
          data: this.scanData,
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
