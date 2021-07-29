import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginUser( user: string, pass: string): Observable<any>{
    const _urlAut ="https://csei.uta.edu.ec/cseidev/registroQR/qr_resgisroB/Negocio/RegistroES/autenticarUsuario.php?usuario="+user+"&contrasenia="+pass;
    return this.http.get(_urlAut);
  }
  setUser(user): void{
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void{
    localStorage.setItem("accessToken", token);
  }

  getToken(){
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(){
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user = JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  logoutUser(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }

}
