import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/dist/echarts.js';

@Component({
  selector: 'app-doughnut-chart',
  template: `
    <div
      echarts
      [options]="option"
      class="echart"
      (chartInit)="onChartInit($event)"
    ></div>
  `,
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughNutChartComponent implements AfterViewInit {
  @Input() data: number[];
  @Input() labels: string[];
  @Input() postion: string;
  @Input() smallerUI: boolean;

  option: any = {};
  echartsInstance;

  colors = [
    'rgb(169,84,49)',
    'rgb(255,213,103)',
    'rgb(183,182,182)',
    'rgb(97,97,97)',
    'rgb(248,180,0)',
    'rgb(230, 126, 34)'
  ];

  chartData = [];
  chartColor = [];

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.smallerUI)
    // position = 'inside'
    // console.log(this.position)
    this.getChartData();
    this.option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: 'bottom',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            fontSize: '12',
            position: this.postion,
            color: 'white',
            formatter: function (d) {
              return d.value + '%';
            },
          },
          color: this.chartColor,
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
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
        show: true,
        top: 'bottom',
      },
      series: [
        {
          type: 'pie',
          radius: this.smallerUI ? ['40%', '100%'] : ['45%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            fontSize: '0.75rem',
            position: this.postion,
            color: this.postion == 'inside' ? 'white' : 'black',
            formatter: function (d) {
              return d.value + '%';
            },
          },
          color: this.chartColor,
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
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
          height: this.smallerUI ? '250px' : '90%',
          width: this.smallerUI ? '100%' : "95%",
          center: ['50%', this.smallerUI ? '60%' : '50%'],
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
