import { Component, OnInit, VERSION, ViewChild, Output, EventEmitter } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { TarjetaSesionService } from './../tarjeta-sesion/tarjetaSesion.service';
import { Iusuario } from '../tarjeta-sesion/usuario';


@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class AppReaderComponent implements OnInit {
  ngVersion = VERSION.patch;
  @ViewChild('scanner', { static: true })
  scanner: ZXingScannerComponent;
  
  constructor(private _tarjetaSesionService: TarjetaSesionService) {
  }

  private user: Iusuario = null;

  public datos: string;

  @Output() userQR = new EventEmitter();

  hasCameras = false;
  hasPermission: boolean;
  qrResultString: string;
  usuarioRegresado: string= " ";

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo = null;


  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;

      console.log('Devices: ', devices);
      this.availableDevices = devices;

      this.selectedDevice = devices[0];
      // selects the devices's back camera by default
      /*  for (const device of devices) {
           if (/back|rear|environment/gi.test(device.label)) {
               //this.scanner.changeDevice(device);
               this.selectedDevice = device;
               break;
           }
       }
       */
      /* if (!this.selectedDevice && devices.length) {
        this.scanner.changeDevice(devices[0]);
        this.selectedDevice = devices[0];
      }  */
    });

    this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      console.error('Ha ocurrido un error intente nuevamente');
    });

    this.scanner.permissionResponse.subscribe((answer: boolean) => {
      this.hasPermission = answer;
    });
  }

  handleQrCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log('Contenido: ', resultString);
    // aqui debo consultar el usuario por qr
    if (this.qrResultString != null) {
      this._tarjetaSesionService.getUserxQR(this.qrResultString).subscribe(
        response => {
          this.user = response;
          if (Object.keys(this.user).length != 0) {
            this.usuarioRegresado = this.user[0].usuario;
            //console.log(this.user);
            //this.userQR = this.user;
            this.userQR.emit({datos:this.user[0].id});
          }else{
            this.usuarioRegresado = "Usuario no encontrado";
          }
        }
      );
    }else{
      this.usuarioRegresado = "QR invalido";
    }
  }
}
