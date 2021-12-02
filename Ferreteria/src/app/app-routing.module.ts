import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerramientaComponent } from './Folder/herramienta/herramienta.component';
import { InicioComponent } from './Folder/inicio/inicio.component';
import { MaterialesComponent } from './Folder/materiales/materiales.component';
import { SeguridadComponent } from './Folder/seguridad/seguridad.component';
import { ClientesComponent } from './Folder/clientes/clientes.component';
import { EditarComponent } from './Folder/editar/editar.component'

const routes: Routes = [
{
  path:"rutainicio",component:InicioComponent
},
{
  path:"rutaherramientas",component:HerramientaComponent
},
{
  path:"rutamateriales",component:MaterialesComponent
},
{
  path:"rutaseguridad",component:SeguridadComponent
},
{
  path:"rutaclientes",component:ClientesComponent
},
{
  path:"rutaeditar",component:EditarComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

