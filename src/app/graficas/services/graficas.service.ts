import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }


  
  //Datos a una grafica de chart.js


  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica')
  }

  getUsuariosData(){
    return this.getUsuariosRedesSociales().pipe( 
        map( data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          console.log(data)

          return {labels, values};
        }) 

      )
  }
}
