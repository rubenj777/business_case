import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels = [
    'Récurrence de commandes',
    'Commandes converties',
    'Paniers abandonnés',
    'Paniers convertis',
  ];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartData: ChartDataset[] = [];

  constructor() {
    this.pieChartData = [
      {
        data: [18, 79, 59, 66],
      },
    ];
  }

  ngOnInit(): void {}
}
