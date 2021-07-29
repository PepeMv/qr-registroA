import { Component, OnInit } from '@angular/core';
import { TarjetaSesionService } from './../tarjeta-sesion/tarjetaSesion.service';
import { Imensaje } from '../tarjeta-sesion/mensaje';

@Component({
  selector: 'app-tarjeta-break',
  templateUrl: './tarjeta-break.component.html',
  styleUrls: ['./tarjeta-break.component.css']
})
export class TarjetaBreakComponent implements OnInit {

  tarjetasBreak = [];
  constructor( private _tarjetaSesionService: TarjetaSesionService ) { }

  trj: any;
  ngOnInit() {
    this._tarjetaSesionService.getTarjetaBreak().subscribe(
      response => {
        this.tarjetasBreak = response;
        this.trj = response;
        console.log(this.tarjetasBreak);       
      }
    );
  }

  tituloModal: string;
  idSesion: number;
  alerta: Imensaje;
  
  onSubmit(titulo: string, id: number) {
    this.tituloModal = titulo;
    this.idSesion = id;
  }

  actualizarEstado( idBreak:number, estado: string ){

    let idSes = idBreak;
    let est   = estado;
    let data = { 'idBreak': idSes, 'estado': est };

    this._tarjetaSesionService.postUpdateBreak(data).subscribe(
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
