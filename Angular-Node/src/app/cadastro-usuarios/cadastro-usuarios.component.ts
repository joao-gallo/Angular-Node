import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { DivService } from '../services/div.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {
  pessoa: any = {};

  constructor(private apiService: ApiRequestService, private router: Router, public divService: DivService) {
    this.divService.setShowDiv(false);
  }

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