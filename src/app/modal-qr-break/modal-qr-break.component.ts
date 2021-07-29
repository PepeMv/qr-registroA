import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TarjetaSesionService } from './../tarjeta-sesion/tarjetaSesion.service';
import { ToastrService } from 'ngx-toastr';
import { Imensaje } from './../tarjeta-sesion/mensaje';

@Component({
  selector: 'app-modal-qr-break',
  templateUrl: './modal-qr-break.component.html',
  styleUrls: ['./modal-qr-break.component.css']
})
export class ModalQrBreakComponent implements OnInit {

  @Input() titulo: string;
  @Input() id: number;

  private idUsuarioQR: number;
  alerta: Imensaje;

  constructor( private tarjetaService: TarjetaSesionService, private toastr: ToastrService, private datePipe: DatePipe ) { }

  myDate = this.datePipe.transform(new Date(), "yyyy-MM-dd h:mm:ss a");

  ngOnInit() {
  }

  imprime(event) {
    this.idUsuarioQR = event.datos;

    console.log("id del user", event.datos);
    console.log(this.myDate);
  }

  onInsertRegistroConsumo(){
    let idUsu = this.idUsuarioQR;
    let idBreak = this.id;
    let fh = this.myDate;
    let data = { 'idUsuario': idUsu, 'idBreak': idBreak, 'f_hora_consumo': fh };

    this.tarjetaService.postRegistroConsumo(data).subscribe(
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
