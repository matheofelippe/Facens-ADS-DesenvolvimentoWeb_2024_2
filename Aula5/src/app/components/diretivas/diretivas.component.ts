import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  exibir:boolean = false;
  
  nomes: string[] = ['Ana', 'Maria', 'José', 'Pedro', 'Darth Vader'];

  tipoAutomovel:string = 'carro';

  cor:string = 'blue';

  condicao: boolean = false;

  isActive: boolean = false;
}
