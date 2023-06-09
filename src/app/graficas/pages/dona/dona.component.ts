import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: [ 350, 450, 100, 300 ], 
          backgroundColor: ['#F51A05','#0724E3', '#05A0F0', '#19E675'] //Ya no es un arreglo de Color
        }                                                   //sino de string y va directamente
                                                            //en los datasets
      ]
    };

    public doughnutChartType: ChartType = 'doughnut';

    
  }