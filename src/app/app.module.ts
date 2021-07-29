import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { appRouting } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

import { AppReaderComponent } from './scanner-qr/reader.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuComponent } from './menu/menu.component';
import { InformativaComponent } from './informativa/informativa.component';
import { PieComponent } from './pie/pie.component';
import { TarjetaSesionComponent } from './tarjeta-sesion/tarjeta-sesion.component';
import { TarjetaSesionService } from './tarjeta-sesion/tarjetaSesion.service';
import { ModalQRComponent } from './modal-qr/modal-qr.component';

import { NgxQRCodeModule } from 'ngx-qrcode2';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TarjetaBreakComponent } from './tarjeta-break/tarjeta-break.component';
import { ModalQrBreakComponent } from './modal-qr-break/modal-qr-break.component';
import { ModalQrAlmuerzoComponent } from './modal-qr-almuerzo/modal-qr-almuerzo.component';
import { TarjetaAlmuerzoComponent } from './tarjeta-almuerzo/tarjeta-almuerzo.component';
import { IregistroES } from './tarjeta-sesion/registroES';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    AppReaderComponent,
    MenuComponent,
    InformativaComponent,
    PieComponent,
    TarjetaSesionComponent,
    ModalQRComponent,
    TarjetaBreakComponent,
    ModalQrBreakComponent,
    ModalQrAlmuerzoComponent,
    TarjetaAlmuerzoComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    AppRoutingModule,
    FormsModule,
    // FormGroup,
    // FormBuilder,
    // Validators,
    ReactiveFormsModule,
    CommonModule,
    ZXingScannerModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgxQRCodeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 900,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    })
  ],
  providers: [TarjetaSesionService, {provide: LOCALE_ID, useValue: 'es'}, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
