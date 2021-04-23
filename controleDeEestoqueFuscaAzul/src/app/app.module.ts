import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarComponent } from './estoque/editar/editar.component';
import { CadastrarComponent } from './estoque/cadastrar/cadastrar.component';
import { VisualizarComponent } from './estoque/visualizar/visualizar.component';
import { EstoqueService } from './estoque/estoque.service';
import { Cadastro } from './estoque/cadastrar/cadastro.models';

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    CadastrarComponent,    
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EstoqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
