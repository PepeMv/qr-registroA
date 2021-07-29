import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ItarjetaSesion } from '../tarjeta-sesion/tarjetaSesion';
import { Observable } from 'rxjs';
import { TarjetaSesionService } from './../tarjeta-sesion/tarjetaSesion.service';
import { IregistroES } from './../tarjeta-sesion/registroES';
import { Imensaje } from './../tarjeta-sesion/mensaje';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-qr',
  templateUrl: './modal-qr.component.html',
  styleUrls: ['./modal-qr.component.css']
})


export class ModalQRComponent implements OnInit {

  @Input() titulo: string;
  @Input() id: number;

  private idUsuarioQR: number;
  alerta: Imensaje;

  constructor(private tarjetaService: TarjetaSesionService, private toastr: ToastrService, private datePipe: DatePipe) {
  }

  myDate = this.datePipe.transform(new Date(), "yyyy-MM-dd h:mm:ss a");
  ngOnInit() {
  }

  showToaster() {
    this.toastr.success(' Registrado! ', ' Hola ');
  }

  imprime(event) {
    this.idUsuarioQR = event.datos;

    console.log("id del user", event.datos);
    console.log(this.myDate);
  }

  onInsertRegistroES() {
    let idUsu = this.idUsuarioQR;
    let idSes = this.id;
    let fh = this.myDate;
    let data = { 'idUsuario': idUsu, 'idSesion': idSes, 'f_h_registro': fh };

    this.tarjetaService.postRegistroES(data).subscribe(
      response => {
        this.alerta = response;
        console.log(this.alerta[0].mensaje);
        if( this.alerta[0].mensaje == 0 ) {
          /* this.showToaster(); */
          this.toastr.error('No tiene reservada esta sesión!','Error');
        }else if(this.alerta[0].mensaje == 2){
          this.toastr.info('Resgistro de salida guardado!','Ocurrio un Problema');
        }else{
          this.toastr.success('Registro de entrada guardado!','Exelente');
        }
      }
    );
  }

}
