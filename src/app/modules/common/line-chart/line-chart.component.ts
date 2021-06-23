import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-line-chart',
  template: `
    <div
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements AfterViewInit {
  @Input() data: number[];
  @Input() maxValue: number;
  @Input() labels: string[];

  option: any = {};
  echartsInstance;

  ngOnChanges(changes: SimpleChanges) {
    this.option = {
      grid: {
        top: '26%',
      },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
        boundaryGap: true,
        axisTick: {
          alignWithLabel: true,
        },
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
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: ['black'],
          },
        },
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: true,
          alignWithLabel: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: ['black'],
          },
        },
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'black',
            width: '2',
          },
        },
        boundaryGap: [0, '40%'],
      },
      legend: {
        show: true,
        orient: 'vertical',
        right: 'top',
        icon: 'line',
      },
      series: [
        {
          data: [170, 240, 212, 242, 155, 147, 160, 143, 352, 133, 321, 231],
          type: 'line',
          name: 'Total sample scanned',
          itemStyle: {
            color: 'rgb(0,0,0)',
          },
          smooth: 1,
        },
        {
          data: [150, 230, 224, 218, 135, 147, 260, 123, 342, 123, 312, 231],
          type: 'line',
          name: 'Good Samples',
          itemStyle: {
            color: 'rgb(125,227,20)',
          },
          smooth: 1,
        },
        {
          data: [140, 232, 101, 264, 90, 340, 250, 300, 400, 293, 100, 280],
          type: 'line',
          name: 'Average Samples',
          itemStyle: {
            color: 'yellow',
          },
          smooth: 1,
        },
        {
          data: [322, 213, 453, 231, 324, 123, 345, 123, 245, 542, 234, 332],
          type: 'line',
          name: 'Bad Samples',
          itemStyle: {
            color: 'rgb(254,74,0)',
          },
          smooth: 1,
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    this.option = {
      grid: {
        top: '26%',
      },
      xAxis: {
        type: 'category',
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
        boundaryGap: true,
        axisTick: {
          alignWithLabel: true,
        },
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
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: ['black'],
          },
        },
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: true,
          alignWithLabel: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: ['black'],
          },
        },
        axisLabel: {
          color: 'black',
          fontSize: 13,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'black',
            width: '2',
          },
        },
        boundaryGap: [0, '40%'],
      },
      legend: {
        show: true,
        orient: 'vertical',
        right: 'top',
        icon: 'line',
        textStyle:{
          fontSize: 13
        }
      },
      series: [
        {
          data: [170, 240, 212, 242, 155, 147, 160, 143, 352, 133, 321, 231],
          type: 'line',
          name: 'Total sample scanned',
          itemStyle: {
            color: 'rgb(0,0,0)',
          },
          smooth: 1,
        },
        {
          data: [150, 230, 224, 218, 135, 147, 260, 123, 342, 123, 312, 231],
          type: 'line',
          name: 'Good Samples',
          itemStyle: {
            color: 'rgb(125,227,20)',
          },
          smooth: 1,
        },
        {
          data: [140, 232, 101, 264, 90, 340, 250, 300, 400, 293, 100, 280],
          type: 'line',
          name: 'Average Samples',
          itemStyle: {
            color: 'yellow',
          },
          smooth: 1,
        },
        {
          data: [322, 213, 453, 231, 324, 123, 345, 123, 245, 542, 234, 332],
          type: 'line',
          name: 'Bad Samples',
          itemStyle: {
            color: 'rgb(254,74,0)',
          },
          smooth: 1,
        },
      ],
    };
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }
}
