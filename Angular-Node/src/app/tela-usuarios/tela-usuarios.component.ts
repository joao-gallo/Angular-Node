import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { Pessoa } from '../Pessoa';
import { DivService } from '../services/div.service';

@Component({
  selector: 'app-tela-usuarios',
  templateUrl: './tela-usuarios.component.html',
  styleUrls: ['./tela-usuarios.component.css']
})
export class TelaUsuariosComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private apiService: ApiRequestService, public divService: DivService) {
    this.divService.setShowDiv(false);
    console.log(this.pessoas)
    this.getAll();
  }

  ngOnInit(): void { }

  getAll(): void {
    this.apiService.getAll().subscribe((x) => (this.pessoas = x));
  }
}
