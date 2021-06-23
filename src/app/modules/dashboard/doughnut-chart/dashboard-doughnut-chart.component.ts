import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-dashboard-doughnut-chart',
  template: `
    <div
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
  styleUrls: ['./dashboard-doughnut-chart.component.scss'],
})
export class DashboardDoughNutChartComponent implements AfterViewInit {
  @Input() data: number[];
  @Input() labels: string[];

  option: any = {};
  echartsInstance;

  colors = [
    'rgb(97,97,97)',
    'rgb(183,182,182)',
    'rgb(255,213,103)',
    'rgb(169,84,49)',
    'rgb(248,180,0)',
  ];

  chartData = [];
  chartColor = [];

  ngOnChanges(changes: SimpleChanges) {
    this.getChartData();
    this.option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        show: false,
        top: 'bottom',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            fontSize: '18',
            position: 'inner',
            color: 'white',
            formatter: function (d) {
              return d.value + '%';
            },
          },
          color: this.chartColor,
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
              formatter: function (d) {
                return d.value + '%';
              },
            },
          },
          labelLine: {
            show: true,
          },
          data: this.chartData,
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    this.getChartData();
    this.option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        show: false,
        top: 'bottom',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            color: 'white',
            fontSize: '18',
            show: true,
            position: 'inner',
            formatter: function (d) {
              return d.value + '%';
            },
          },
          color: this.chartColor,
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
              formatter: function (d) {
                return d.value + '%';
              },
            },
          },
          labelLine: {
            show: true,
          },
          data: this.chartData,
        },
      ],
    };
  }

  getChartData() {
    this.chartData = [];
    this.chartColor = [];
    for (var i = 0; i < this.data.length; i++) {
      this.chartData.push({
        value: this.data[i],
        name: this.labels[i],
      });
      this.chartColor.push(this.colors[i]);
    }
    console.log(this.chartData, this.chartColor);
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }
}
