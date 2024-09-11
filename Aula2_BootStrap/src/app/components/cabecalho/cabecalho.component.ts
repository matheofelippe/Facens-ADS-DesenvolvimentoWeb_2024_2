import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})

export class CabecalhoComponent {
  nomeApp: string = 'App do Angular';
  menu: string[] = ['Casa', 'Sobre', 'Contato'];
}
