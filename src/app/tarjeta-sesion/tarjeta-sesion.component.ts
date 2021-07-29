import { Component, OnInit } from '@angular/core';
import { TarjetaSesionService } from './tarjetaSesion.service';
import { Imensaje } from './mensaje';


@Component({
  selector: 'app-tarjeta-sesion',  
  templateUrl: './tarjeta-sesion.component.html',
  styleUrls: ['./tarjeta-sesion.component.css']
})
export class TarjetaSesionComponent implements OnInit {

  tarjetasSesion = [];
  alerta: Imensaje;

  constructor(private _tarjetaSesionService: TarjetaSesionService ) { }

  abierto = true;

  ngOnInit() {
    this._tarjetaSesionService.getTarjetasSesion().subscribe(
      response => {
        this.tarjetasSesion = response;
        console.log(this.tarjetasSesion);
      }
    );
    /* .subscribe(data => this.tarjetasSesion  = data); */
  }
  tituloModal: string;
  idSesion: number;
  
  onSubmit(titulo: string, id: number) {
    this.tituloModal = titulo;
    this.idSesion = id;
  }
  //actualizarEstado 
  actualizarEstado( idSesion:number, estado: string ){

    let idSes = idSesion;
    let est   = estado;
    let data = { 'idSesion': idSes, 'estado': est };

    this._tarjetaSesionService.postUpdateSesion(data).subscribe(
      response => {
        this.alerta = response;
        console.log(this.alerta[0].mensaje);
        if(this.alerta[0].mensaje==1){
          location.reload();
        }
      }
    );
    //location.reload();
  }
}
