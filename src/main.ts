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
      data: [100, 60, 90, 0, 80, 50],
      label: '平均湿度',
    },
  ];

  // ラベル
  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    responsive: true,
  };

  // 色
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,255,0.28)',
    },
  ];

  lineChartLegend = true; // グラフの属性ラベル
  lineChartPlugins = [];
  lineChartType = 'line'; // グラフの種類

  barChartOptions: ChartOptions = {
    responsive: true,
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
}

bootstrapApplication(App);
