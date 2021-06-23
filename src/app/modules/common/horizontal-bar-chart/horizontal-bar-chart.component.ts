import { AfterViewInit, Component, Input, OnDestroy, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-horizontal-bar-chart',
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
  styleUrls: ['./horizontal-bar-chart.component.scss'],
})
export class HorizontalBarChartComponent implements AfterViewInit {
  @Input() data: number[];
  @Input() maxValue: number;
  @Input() labels: string[];
  @Input() text: string;
  barColor = ["rgb(255,213,103)", "rgb(215,223,35)", "rgb(97,97,97)", "rgb(112,212,224)", "rgb(255,171,122)"];

  option: any = {};
  echartsInstance;

  ngOnChanges(changes: SimpleChanges) {
    this.option = {
      title: {
        show: this.data.length > 0 ? false : true,
        textStyle: {
          color: 'black',
        },
        text: 'No Data',
        left: 'center',
        top: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        show: false,
        data: ['No of Scan'],
        right: 'top',
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '3%',
        containLabel: true,
      },
      xAxis: {
        show: false,
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          lineStyle: {
            color: 'black',
            width: '2',
          },
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          lineStyle: {
            color: 'transparent',
            width: '1',
          },
        },
      },
      yAxis: {
        data: this.labels,
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          lineStyle: {
            color: 'black',
            width: '2',
          },
        },
        axisTick: {
          show: true,
        },
      },
      series: [
        {
          type: 'bar',
          name: 'No of Scan',
          barWidth: '30%',
          data: this.barValue(),
          cursor: 'default',
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
          },
          itemStyle: {
            normal: {
              barBorderRadius: [0, 50, 50, 0],
            },
          },
          z: 3,
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    this.option = {
      title: {
        show: this.data.length > 0 ? false : true,
        textStyle: {
          color: 'black',
        },
        text: 'No Data',
        left: 'center',
        top: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        show: false,
        data: ['No of Scan'],
        right: 'top',
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '3%',
        containLabel: true,
      },
      xAxis: {
        axisLabel: {
          color: 'black',
          fontSize: 13,
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: 'black',
            width: '12',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: 'transparent',
            width: '1',
          },
        },
      },
      yAxis: {
        data: this.labels,
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(241,241,241,255)',
            width: '2',
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          name: 'No of Scan',
          barWidth: '30%',
          data: this.barValue(),
          cursor: 'default',
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
          },
          itemStyle: {
            normal: {
              barBorderRadius: [0, 50, 50, 0],
            },
          },
          z: 3,
        },
      ],
    };
  }

  barValue(){
    var barData = [];
    for(var i=0;i<this.data.length;i++){
      barData.push({
        value: this.data[i],
        itemStyle: { color: this.barColor[i] },
      });
    }
    return barData;
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }
}
