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
        data: [
          19056.23, 19562.96, 19566.15, 18965.46, 19256.97, 19355.13, 19540.87,
        ],
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
