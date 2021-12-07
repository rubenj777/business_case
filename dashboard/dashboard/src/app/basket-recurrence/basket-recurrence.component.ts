import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-basket-recurrence',
  templateUrl: './basket-recurrence.component.html',
  styleUrls: ['./basket-recurrence.component.scss'],
})
export class BasketRecurrenceComponent implements OnInit {
  data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
