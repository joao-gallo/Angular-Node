import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-request.service';
import { Pessoa } from '../Pessoa';


@Component({
  selector: 'app-tela-usuarios',
  templateUrl: './tela-usuarios.component.html',
  styleUrls: ['./tela-usuarios.component.css']
})
export class TelaUsuariosComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private apiService: ApiRequestService) {
    this.getAll();
    console.log('o que ta rolando auqi, ', this.pessoas)
  }

  ngOnInit(): void { }

  getAll(): void {
    this.apiService.getAll().subscribe((x) => (this.pessoas = x));
  }
}
