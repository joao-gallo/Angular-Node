import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaUsuariosComponent } from './tela-usuarios/tela-usuarios.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';

const routes: Routes = [
  { path: 'app-tela-usuarios', component: TelaUsuariosComponent },
  { path: 'register', component: CadastroUsuariosComponent },
  { path: 'detalhes/:nome', component: DetalhesUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
