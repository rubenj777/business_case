import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  public barChartLabels = [
    'article',
    'article',
    'article',
    'article',
    'article',
    'article',
    'article',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [];
  constructor() {
    this.barChartData = [
      {
        data: [1656.23, 1562.96, 1466.15, 1265.46, 1156.97, 1055.13, 940.87],
        label: 'Total des produits vendus',
        // backgroundColor: '#498C8A',
        // borderColor: '#498C8A',
        // pointBackgroundColor: '#498C8A',
        // pointBorderColor: '#498C8A',
        // pointHoverBackgroundColor: '#498C8A',
      },
    ];
  }

  ngOnInit(): void {}
}
