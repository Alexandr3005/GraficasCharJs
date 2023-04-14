import { Component, OnInit } from '@angular/core';
import { RadioControlValueAccessor } from '@angular/forms';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from 'src/app/graficas/services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: ['#F51A05', '#0724E3', '#05A0F0', '#19E675', '#4BDE4D']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


 //Sacar los datos en ala grafica 

  ngOnInit(): void {
    this.graficasService.getUsuariosData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData.labels = labels;    
        this.doughnutChartData.datasets[0].data = values;
    
      });
  }
  

}


// Otra forma -- menos efectivo 

  // ngOnInit(): void {
  //   this.graficasService.getUsuariosRedesSociales().subscribe(data => {
  //     const labels = Object.keys(data);
  //     const values = Object.values(data);
  //     this.doughnutChartLabels = labels;
  //     this.doughnutChartData.datasets[0].data = values;
  //   });
  // }
