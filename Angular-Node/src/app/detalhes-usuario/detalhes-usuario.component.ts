import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {
  usuario: any;
  dataHoje: Date = new Date();

  dadosAleatorios: number[] = [];
  grafico: number[] = [];

  constructor(private apiService: ApiRequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    console.log('====================================');
    console.log(nome, 'isso esta chegando');
    console.log('====================================');
    if (nome) {
      this.apiService.getOne(nome).subscribe((data) => {
        this.usuario = data;
        console.log(this.usuario, 'usuario');

      });
    } else {
      this.usuario = {};
    }

    setInterval(() => {
      this.gerarDadosAleatorios();
      this.atualizarGrafico();
    }, 1000);
  }
  gerarDadosAleatorios(): void {
    for (let i = 0; i < 5; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      this.dadosAleatorios.push(numeroAleatorio);
    }
  }
  atualizarGrafico(): void {
    this.grafico.push(...this.dadosAleatorios);
    if (this.grafico.length > 50) {
      this.grafico.splice(0, this.dadosAleatorios.length);
    }
  }
}
