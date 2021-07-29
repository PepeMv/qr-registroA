import { Component, OnInit } from '@angular/core';
import { TarjetaSesionService } from './../tarjeta-sesion/tarjetaSesion.service';
import { Imensaje } from '../tarjeta-sesion/mensaje';

@Component({
  selector: 'app-tarjeta-almuerzo',
  templateUrl: './tarjeta-almuerzo.component.html',
  styleUrls: ['./tarjeta-almuerzo.component.css']
})
export class TarjetaAlmuerzoComponent implements OnInit {

  constructor( private _tarjetaSesionService: TarjetaSesionService ) { }

  tarjetasAlmuerzo = [];

  ngOnInit() {
    this._tarjetaSesionService.getTarjetasAlmuerzo().subscribe(
      response => {
        this.tarjetasAlmuerzo = response;
        /* this.trj = response; */
        console.log(this.tarjetasAlmuerzo);
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
