import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { ChartsModule } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js'; // データ型をimport
import { Color, Label } from 'ng2-charts'; // ng2-chartsのプロパティのデータ型をimport

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ChartsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <div>
      <canvas baseChart
        [datasets]="lineChartData"
        [labels]="lineChartLabels"
        [options]="lineChartOptions"
        [colors]="lineChartColors"
        [legend]="lineChartLegend"
        [chartType]="lineChartType"
        [plugins]="lineChartPlugins">
      </canvas>
    </div>

    <div>
      <canvas baseChart
        [datasets]="barChartData"
        [labels]="barChartLabels"
        [options]="barChartOptions"
        [colors]="barChartColors"
        [plugins]="barChartPlugins"
        [legend]="barChartLegend"
        [chartType]="barChartType">
      </canvas>
    </div>

  `,
})
export class App {
  name = 'Angular';

  // data
  lineChartData: ChartDataSets[] = [
    {
      data: [100, 60, 90, 20, 80, 50],
      label: '精度',
      lineTension: 0,
    },
    {
      data: [50, 50, 50, 50, 50, 50],
      label: '閾値',
      lineTension: 0,
    },
  ];

  // ラベル
  lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6'];

  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 1,
            max: 100,
            precision: 0,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            precision: 0,
            callback: function (value) {
              return value + '%';
            },
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };

  // 色
  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(0,0,255,0.28)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,0,255,0)',
    },
  ];

  lineChartLegend = true; // グラフの属性ラベル
  lineChartPlugins = [];
  lineChartType = 'line'; // グラフの種類

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            precision: 0,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  barChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [100, 200, 70, 600, 450, 300], label: '月別降水量' },
  ];
  // 色
  barChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0,0,255,0.28)',
    },
  ];
}

bootstrapApplication(App);
