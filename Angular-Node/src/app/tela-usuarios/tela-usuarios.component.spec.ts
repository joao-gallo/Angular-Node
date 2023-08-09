import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaUsuariosComponent } from './tela-usuarios.component';

describe('TelaUsuariosComponent', () => {
  let component: TelaUsuariosComponent;
  let fixture: ComponentFixture<TelaUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaUsuariosComponent]
    });
    fixture = TestBed.createComponent(TelaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
