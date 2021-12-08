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
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];
  public barChartType: ChartType = 'line';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [];
  constructor() {
    this.barChartData = [
      {
        data: [1056.23, 1562.96, 1566.15, 1565.46, 1256.97, 1355.13, 1540.87],
        label: 'Montant total des ventes',
        backgroundColor: '#498C8A',
        borderColor: '#498C8A',
        pointBackgroundColor: '#498C8A',
        pointBorderColor: '#498C8A',
        pointHoverBackgroundColor: '#498C8A',
        pointHoverBorderColor: '#00000',
      },
    ];
  }

  ngOnInit(): void {}
}
