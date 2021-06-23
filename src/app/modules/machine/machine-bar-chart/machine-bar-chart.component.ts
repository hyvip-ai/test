import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-machine-bar-chart',
  template: `
    <div
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
  styleUrls: ['./machine-bar-chart.component.scss'],
})
export class MachineBarChartComponent implements AfterViewInit {
  @Input() data: number[];
  @Input() labels: string[];
  barColor = [
    'rgb(255,213,103)',
    'rgb(215,223,35)',
    'rgb(97,97,97)',
    'rgb(112,212,224)',
    'rgb(255,171,122)',
  ];
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
      grid: {
        top: '15%',
      },
      series: [
        {
          data: this.barValue(),
          type: 'bar',
          barWidth: '20%',
          label: {
            show: true,
            position: 'top',
            valueAnimation: true,
          },
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 0, 0],
            },
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
      grid:{
        top: '15%'
      },
      series: [
        {
          name: 'No of scan',
          data: this.barValue(),
          type: 'bar',
          barWidth: '20%',
          label: {
            show: true,
            position: 'top',
            valueAnimation: true,
          },
          itemStyle:{
            normal: {
              barBorderRadius: [50, 50, 0, 0],
            },
          }
        },
      ],
    };
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  barValue() {
    var barData = [];
    for (var i = 0; i < this.data.length; i++) {
      barData.push({
        value: this.data[i],
        itemStyle: { color: this.barColor[i] },
      });
    }
    return barData;
  }
}
