import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ItarjetaSesion } from './tarjetaSesion';
import { Observable } from 'rxjs';
import { ItarjetaBreak } from './tarjetaBreak';
import { IregistroES } from './../tarjeta-sesion/registroES';
import { Imensaje } from './../tarjeta-sesion/mensaje';
import { Iusuario} from './../tarjeta-sesion/usuario';
import { DatePipe } from '@angular/common';


@Injectable ()
export class TarjetaSesionService {

    constructor( private http: HttpClient,  private datePipe: DatePipe ) { }

    myDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");

    //select de sesiones
    private _url = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/Sesion/selectxFecha.php?fecha="+this.myDate;
    getTarjetasSesion(): Observable <ItarjetaSesion[]> {
        return this.http.get<ItarjetaSesion[]>(this._url);
    }

    //select de breaks
    private _urlB = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/Break/selectxFecha.php?fecha="+this.myDate;
    getTarjetaBreak(): Observable <ItarjetaBreak[]> {
        return this.http.get<ItarjetaBreak[]>(this._urlB);
    }

    //select de almuerzos
    private _urlAlmuerzo = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/Break/selectAlmuerzoxFecha.php?fecha="+this.myDate;
    getTarjetasAlmuerzo(): Observable <ItarjetaBreak[]>{
        return this.http.get<ItarjetaBreak[]>(this._urlAlmuerzo);
    }

    //select de usuario x qr    
    getUserxQR(qr: string): Observable <Iusuario>{
        let _urlUsuarioxqr = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/RegistroES/selectUsuarioxQR.php?qr="+qr;
        return this.http.get<Iusuario>(_urlUsuarioxqr);
    }

    //registro de entrada y salida
    private _urlRegistroES = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/RegistroES/registrarIngresoES.php";
   postRegistroES(registro: any): Observable <Imensaje> {
        return this.http.post<Imensaje>(this._urlRegistroES, registro);
    }

    //registro de consumo break y almuerzos
    private _urlRegistroConsumo = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/RegistroConsumo/registrarConsumo.php";
    postRegistroConsumo( registro: any): Observable <Imensaje> {
        return this.http.post<Imensaje>(this._urlRegistroConsumo,registro);
    }

    //cambio de estado en sesion 
    private _urlUpdateSesion = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/Sesion/update.php";
    postUpdateSesion( registro: any ): Observable <Imensaje>{
        return this.http.post<Imensaje>(this._urlUpdateSesion,registro);
    }

    //cambio de estado breakks y almuerzos 
    private _urlUpdateBreak = "https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/Break/update.php";
    postUpdateBreak( registro: any ): Observable <Imensaje>{
        return this.http.post<Imensaje>(this._urlUpdateBreak,registro);
    }
}



