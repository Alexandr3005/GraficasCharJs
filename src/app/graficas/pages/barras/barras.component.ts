import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [

  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['20020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      { data: [28, 48, 3, 19, 86, 27, 90], label: 'Series B' },
      { data: [8, 48, 40, 19, 86, 27, 90], label: 'Series c' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
     Math.round(Math.random()* 100),
     Math.round(Math.random()* 100),
     Math.round(Math.random()* 100),
     Math.round(Math.random()* 100),
     Math.round(Math.random()* 100),
     Math.round(Math.random()* 100),
     Math.round(Math.random()* 100),
    ];
  }

}




