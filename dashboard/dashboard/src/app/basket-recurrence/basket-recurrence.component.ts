import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-basket-recurrence',
  templateUrl: './basket-recurrence.component.html',
  styleUrls: ['./basket-recurrence.component.scss'],
})
export class BasketRecurrenceComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [];
  public pieChartData: ChartDataset[] = [
    {
      data: [0.1],
      label: 'Récurrence panier',
      backgroundColor: '#498C8A',
      borderColor: '#498C8A',
      pointBackgroundColor: '#498C8A',
      pointBorderColor: '#498C8A',
      pointHoverBackgroundColor: '#498C8A',
      pointHoverBorderColor: '#00000',
    },
    {
      data: [0.9],
      label: 'Récurrence panier',
      backgroundColor: '#269E49',
      borderColor: '#269E49',
      pointBackgroundColor: '#269E49',
      pointBorderColor: '#269E49',
      pointHoverBackgroundColor: '#269E49',
      pointHoverBorderColor: '#00000',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
