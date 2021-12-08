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
  public pieChartLabels = ['Récurrence de commandes', 'Commandes converties'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartData: ChartDataset[] = [];

  constructor() {
    this.pieChartData = [
      {
        data: [18, 79],
      },
    ];
  }

  ngOnInit(): void {}
}
