import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-request.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {
  pessoa: any = {};

  constructor(private apiService: ApiRequestService, private router: Router) { }

  ngOnInit() {
    this.pessoa = {
      nome: '',
      dataNascimento: '',
      cpf: '',
      telefone: ''
    };
  }

  onSubmit() {
    this.apiService.register(this.pessoa).subscribe({
      next: (v) => {
        console.log(v)
        window.alert('Cadastro Realizado!')
        this.router.navigate(['/app-tela-usuarios']);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }
    );
  }
}