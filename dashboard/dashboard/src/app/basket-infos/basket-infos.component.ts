import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-basket-infos',
  templateUrl: './basket-infos.component.html',
  styleUrls: ['./basket-infos.component.scss'],
})
export class BasketInfosComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels = ['Paniers abandonnés', 'Paniers convertis'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartData: ChartDataset[] = [];

  constructor() {
    this.pieChartData = [
      {
        data: [26, 59],
      },
    ];
  }

  ngOnInit(): void {}
}
