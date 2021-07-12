import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VentaComponent } from './venta/venta.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    VentaComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
