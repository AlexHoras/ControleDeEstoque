import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SaidaComponent } from './saida/saida.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CadastroService } from './cadastro/cadastro.service';
import { ListService } from './list/list.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    SaidaComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CadastroService,
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
