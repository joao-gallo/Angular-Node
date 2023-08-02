import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { AppComponent } from './app.component';
import { TelaUsuariosComponent } from './tela-usuarios/tela-usuarios.component';
import { ApiRequestService } from './api-request.service';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';

import { AppRoutingModule } from './app-routing.module';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    TelaUsuariosComponent,
    CadastroUsuariosComponent,
    DetalhesUsuarioComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [ApiRequestService, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
