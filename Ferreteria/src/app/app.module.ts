import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Folder/inicio/inicio.component';
import { HerramientaComponent } from './Folder/herramienta/herramienta.component';
import { MaterialesComponent } from './Folder/materiales/materiales.component';
import { SeguridadComponent } from './Folder/seguridad/seguridad.component';
import { ClientesComponent } from './Folder/clientes/clientes.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { EditarComponent } from './Folder/editar/editar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HerramientaComponent,
    MaterialesComponent,
    SeguridadComponent,
    ClientesComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
