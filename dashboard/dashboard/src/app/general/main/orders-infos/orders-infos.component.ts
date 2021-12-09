import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-orders-infos',
  templateUrl: './orders-infos.component.html',
  styleUrls: ['./orders-infos.component.scss'],
})
export class OrdersInfosComponent implements OnInit {
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
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartData: ChartDataset[] = [];

  constructor() {
    this.pieChartData = [
      {
        data: [18, 79, 59, 66],
        backgroundColor: ['#EF8954', '#FUSO15', '#7956S', '#DFZ98'],
      },
    ];
  }

  ngOnInit(): void {}
}
