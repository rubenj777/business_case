import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';
import { Data } from 'src/app/general/models/data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  dataReceived: any;
  public recurrence!: number;
  public conversionsCommandes!: number;
  public abandonsPaniers!: number;
  public conversionsPaniers!: number;
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

  constructor(public auth: AuthService) {
    this.recurrence = this.auth.recurrence;
    this.pieChartData = [
      {
        data: [
          this.recurrence,
          this.conversionsCommandes,
          this.abandonsPaniers,
          this.conversionsPaniers,
        ],
      },
    ];
  }

  ngOnInit(): void {
    console.log(this.auth.recurrence);
  }
}
