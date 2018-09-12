import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina  = {};
    cargada = false;

    equipo: any[] = [];

    constructor( private http: HttpClient) {
//  console.log('Servicio de Pagina Listo');

  // Leer el archivo JSON
      this.cargarInfo();
      this.cargarEquipo();
   }
   private cargarInfo() {
   // leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp);

    });
   }
   private cargarEquipo() {
   // console.log('Servicio de Pagina Listo');
    this.http.get('https://angular-html-2f7ae.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.cargada = true;
        this.equipo = resp;
        // console.log(resp);
    });

   }
}
