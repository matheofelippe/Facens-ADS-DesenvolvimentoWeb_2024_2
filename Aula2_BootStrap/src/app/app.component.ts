import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  nomeApp: string = 'App do Angular';
  menu: string[] = ['Casa', 'Sobre', 'Contato'];
  index: number = 1;
  descricao: string = 'Descrição da imagem 1';

  card = {
    title: 'Card 1',
    description: 'This is the content of card 1.',
  }

  constructor() {
    console.log('AppComponent: constructor');
  }

  onChangeImage() {
    this.index ++;
  }

  onSubmit(form: NgForm) {
    this.card.description = this.descricao;
  }
}
