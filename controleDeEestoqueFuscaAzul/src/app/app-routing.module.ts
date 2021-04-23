import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './estoque/cadastrar/cadastrar.component';
import { EditarComponent } from './estoque/editar/editar.component';
import { VisualizarComponent } from './estoque/visualizar/visualizar.component';

const routes: Routes = [
  {path:"", component:VisualizarComponent},
  {path:"editar/:id", component:EditarComponent},
  {path:"cadastrar", component:CadastrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
